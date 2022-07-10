import {
  Center,
  Container,
  Image,
  Loader,
  SegmentedControl,
  Title,
} from "@mantine/core";
import { User } from "@supabase/supabase-js";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Lesson from "../components/Lesson";
import Module from "../components/Module";
import supabase from "../utils/supabase";

const Learn: NextPage = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lessonsAndThumbnails, setLessonsAndThumbnails] = useState([]);
  const [modules, setModules] = useState<Array<any>>([]);
  const [filteredModules, setFilteredModules] = useState<Array<any>>([]);
  const [lessonsUsers, setLessonsUsers] = useState([]);
  const [lessons, setLessons] = useState<Array<any>>();
  const [userState, setUserState] = useState<User | null>(null);
  const [track, setTrack] = useState("1");
  const [tracks, setTracks] = useState<Array<any>>([{ label: "1", value: "1" }]);

  const getTracks = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("tracks").select("*");
      if (data) {
        const t = data.map((track: any) => {
          return {
            label: track.title,
            value: track.id.toString(),
          };
        });
        setTracks(t);
      }
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const filtModules = modules.filter(
      (module) => module.track_id === Number(track)
    );
    const sortedFiltModules = filtModules.sort(
      (a: any, b: any) => a.order - b.order
    );
    setFilteredModules(sortedFiltModules);
  }, [modules, track]);

  useEffect(() => {
    getTracks();
  }, []);

  const getLessons = async () => {
    setIsLoading(true);
    const { data: lessons, error: e1 } = await supabase
      .from("lessons")
      .select("*");
    const { data: modules, error: e2 } = await supabase
      .from("modules")
      .select("*");

    const lessonsAndThumbnails = lessons?.map((lesson) => {
      const { publicURL, error: e3 } = supabase.storage
        .from("images")
        .getPublicUrl(lesson.thumbnail);
      return {
        lesson,
        thumbnailURL: publicURL,
      };
    });

    const { data: lessonsUsers, error: e4 } = await supabase
      .from("lessons_users")
      .select("*");

    return {
      lessonsAndThumbnails,
      modules,
      lessonsUsers,
    };
  };

  useEffect(() => {
    getLessons().then((res: any) => {
      if (res) {
        setLessonsAndThumbnails(res.lessonsAndThumbnails);
        setModules(res.modules);
        setLessonsUsers(res.lessonsUsers);
        setIsLoading(false);
      } else {
        console.error("error getting the lessons");
      }
    });
  }, []);

  const user = supabase.auth.user();
  useEffect(() => {
    setUserState(supabase.auth.user());
  }, [user]);

  useEffect(() => {
    if (userState) {
      const formattedLessons = lessonsAndThumbnails.map((lesson: any) => {
        return {
          ...lesson,
          lesson: {
            ...lesson.lesson,
            is_completed: lessonsUsers.some(
              (lessonUser: any) =>
                lessonUser.lesson_id === lesson.lesson.id &&
                lessonUser.user_id === userState.id &&
                lessonUser.is_completed
            ),
          },
        };
      });
      setLessons(formattedLessons);
    }
  }, [lessonsUsers, lessonsAndThumbnails, userState]);

  const toggleCompleted = async (lessonId: number) => {
    if (userState) {
      const { data: existingLesson, error } = await supabase
        .from("lessons_users")
        .select("lesson_id, user_id, is_completed")
        .eq("user_id", userState.id)
        .eq("lesson_id", lessonId);

      if (existingLesson !== null && existingLesson.length > 0) {
        await supabase
          .from("lessons_users")
          .update({ is_completed: !existingLesson[0].is_completed })
          .match({ user_id: userState.id })
          .match({ lesson_id: lessonId });
      } else {
        await supabase.from("lessons_users").insert({
          lesson_id: lessonId,
          user_id: userState.id,
          is_completed: true,
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      {isLoading ? (
        <Center mt="xl">
          <Loader size="xl" />
        </Center>
      ) : (
        <Container size="xl">
          <Center>
            <SegmentedControl value={track} onChange={setTrack} data={tracks} />
          </Center>
          <div style={{ display: `${userState ? "block" : "none"}` }}>
            {filteredModules?.map((module: any) => (
              <div key={`outer-div-${module.id}`}>
                <Module key={`module-${module.id}`} title={module.title} />
                {lessons?.map(
                  (lesson) =>
                    lesson.lesson.module_id === module.id && (
                      <Lesson
                        key={`lesson-${lesson.lesson.id}`}
                        lessonId={lesson.lesson.id}
                        title={lesson.lesson.title}
                        description={lesson.lesson.description}
                        source={lesson.lesson.source}
                        url={lesson.lesson.url}
                        thumbnailURL={lesson.thumbnailURL}
                        toggleCompleted={toggleCompleted}
                        isCompleted={lesson.lesson.is_completed}
                      />
                    )
                )}
              </div>
            ))}
          </div>
          <div style={{ display: `${userState ? "none" : "block"}` }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/door.jpg"
                width={400}
                alt="watercolor door with turnkey lock"
              />
              <Title order={2}>
                Please <Link href="/login">login</Link>.
              </Title>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Learn;
