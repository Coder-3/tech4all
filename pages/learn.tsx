import type { NextPage } from "next";
import Head from "next/head";
import supabase from "../utils/supabase";

export const getServerSideProps = async () => {
  const { data: lessons, error } = await supabase.from("lessons").select("*");

  if (error) {
    console.error(error);
  }

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
      <h1>works</h1>
    </>
  );
};

export default Learn;
