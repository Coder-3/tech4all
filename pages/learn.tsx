import { AppShell, Button, Container, Header, Navbar, Stack, Title } from "@mantine/core";
import { UpdateIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Lesson from "../components/Lesson";
import Module from "../components/Module";
import supabase from "../utils/supabase";

export const getServerSideProps = async () => {
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
    props: {
      lessonsAndThumbnails,
      modules,
      lessonsUsers,
    },
  };
};

interface Props {
  lessonsAndThumbnails: Array<any>;
  modules: Array<any>;
  lessonsUsers: Array<any>;
}

const Learn: NextPage<Props> = ({
  lessonsAndThumbnails,
  modules,
  lessonsUsers,
}) => {
  const user = supabase.auth.user();
  const [lessons, setLessons] = useState<Array<any>>();

  useEffect(() => {
    if (user) {
      const formattedLessons = lessonsAndThumbnails.map((lesson) => {
        return {
          ...lesson,
          lesson: {
            ...lesson.lesson,
            is_completed: lessonsUsers.some(
              (lessonUser) =>
                lessonUser.lesson_id === lesson.lesson.id &&
                lessonUser.user_id === user.id &&
                lessonUser.is_completed
            ),
          },
        };
      });
      setLessons(formattedLessons);
    }
  }, [lessonsUsers, lessonsAndThumbnails, user]);

  const toggleCompleted = async (lessonId: number) => {
    const user = supabase.auth.user();
    if (user) {
      const { data: existingLesson, error } = await supabase
        .from("lessons_users")
        .select("lesson_id, user_id, is_completed")
        .eq("user_id", user.id)
        .eq("lesson_id", lessonId);

      if (existingLesson !== null && existingLesson.length > 0) {
        await supabase
          .from("lessons_users")
          .update({ is_completed: !existingLesson[0].is_completed })
          .match({ user_id: user.id })
          .match({ lesson_id: lessonId });
      } else {
        await supabase.from("lessons_users").insert({
          lesson_id: lessonId,
          user_id: user.id,
          is_completed: true,
        });
      }
    } else {
      console.error("TODO: handle not logged in user");
    }
  };

  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      <Container size="xl">
        {modules?.map((module) => (
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
      </Container>
    </>
  );
};

export default Learn;
