import { AppShell, Button, Header, Navbar, Stack, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
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

    const { data: lessons_users, error: e4 } = await supabase.from("lessons_users").select("*");

  return {
    props: {
      lessonsAndThumbnails,
      modules,
    },
  };
};

interface Props {
  lessonsAndThumbnails: Array<any>;
  modules: Array<any>;
}

const Learn: NextPage<Props> = ({ lessonsAndThumbnails, modules }) => {
  
  const toggleCompleted = async (lessonId: string) => {
    const user = supabase.auth.user();
    if (user) {
      // TODO: error handle this
      await supabase.from("lessons_users").insert({
        lesson_id: lessonId,
        user_id: user.id,
      })
    } else {
      console.error('TODO: handle not logged in user')
    }
  }

  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      <AppShell
        navbar={
          <Navbar width={{ base: 200 }} height={500}>
            <Navbar.Section p={20}>
              <Stack>
                <Link href="/profile">My Profile</Link>
                <Link href="/#">Curriculum</Link>
              </Stack>
            </Navbar.Section>
          </Navbar>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {modules?.map((module) => (
          <div key={`outer-div-${module.id}`}>
            <Module key={`module-${module.id}`} title={module.title} />
            {lessonsAndThumbnails?.map(
              (lessonAndThumbnail) =>
                lessonAndThumbnail.lesson.module_id === module.id && (
                  <Lesson
                    key={`lesson-${lessonAndThumbnail.lesson.id}`}
                    title={lessonAndThumbnail.lesson.title}
                    description={lessonAndThumbnail.lesson.description}
                    source={lessonAndThumbnail.lesson.source}
                    url={lessonAndThumbnail.lesson.url}
                    thumbnailURL={lessonAndThumbnail.thumbnailURL}
                    // add is_completed to the backend using user ID
                    is_completed={false}
                  />
                )
            )}
          </div>
        ))}
      </AppShell>
    </>
  );
};

export default Learn;
