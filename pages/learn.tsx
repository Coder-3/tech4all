import { AppShell, Button, Header, Navbar, Stack, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Lesson from "../components/Lesson";
import Module from "../components/Module";
import supabase from "../utils/supabase";

export const getServerSideProps = async () => {
  const { data: lessons, error } = await supabase.from("lessons").select("*");
  const { data: modules, error: error2 } = await supabase
    .from("modules")
    .select("*");

  return {
    props: {
      lessons,
    },
  };
};

interface Props {
  lessons: Array<any>;
}

const Learn: NextPage<Props> = ({ lessons }) => {
  console.log(lessons);
  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      <AppShell
        navbar={
          <Navbar width={{ base: 300 }} height={500}>
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
        <Module title="Module 1" />
        <Lesson
          title="Lesson 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          source="Tech Teacher via YouTube"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          is_completed={true}
        />
        <Lesson
          title="Lesson 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          source="Tech Teacher via YouTube"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          is_completed={false}
        />
      </AppShell>
    </>
  );
};

export default Learn;
