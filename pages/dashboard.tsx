import {
  Container,
  Timeline,
  Avatar
} from "@mantine/core";
import { User } from "@supabase/supabase-js";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const Dashboard: NextPage = ({}) => {
  const [lessonsAndThumbnails, setLessonsAndThumbnails] = useState([]);
  const [modules, setModules] = useState([]);
  const [lessonsUsers, setLessonsUsers] = useState([]);
  const [userState, setUserState] = useState<User | null>(null);
  const [lessons, setLessons] = useState<Array<any>>();


  const user = supabase.auth.user();
  useEffect(() => {
    setUserState(supabase.auth.user());
  }, [user]);


  useEffect(() => {
    const getMappedUserLessons = async () => {
      const { data: lessons } = await supabase.from("lessons").select('id, title');
      const { data: lessonsUsers } = await supabase
        .from("lessons_users")
        .select("*");
      const formattedLessons = lessons?.map((lesson: any) => {
        return {
          ...lesson,
          is_completed: lessonsUsers?.some(
            (lessonUser: any) =>
              lessonUser.lesson_id === lesson.id &&
              lessonUser.user_id === userState?.id &&
              lessonUser.is_completed
          )
        };
      });
      return formattedLessons;
    };
    getMappedUserLessons().then((res: any) => {
      setLessons(res);
    });
  }, [userState?.id]);

  return (
    <>
      <Container>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div style={{ maxWidth: 320, margin: "auto" }}>
          <Timeline>
            {lessons?.sort((a, b) => a.id - b.id).map((lesson) =>
              lesson.is_completed ? (
                <Timeline.Item
                  key={`lesson-${lesson.id}`}
                  title={lesson.title}
                  bulletSize={24}
                  active
                  bullet={<Avatar
                    size={22}
                    radius="xl"
                    src="images/icon color.png"
                  />}
                >
                </Timeline.Item>
              ) : (
                <Timeline.Item
                  key={`lesson-${lesson.id}`}
                  title={lesson.title}
                  bulletSize={24}
                ></Timeline.Item>
              )
            )}
          </Timeline>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
