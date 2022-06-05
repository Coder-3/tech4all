import type { NextPage } from "next";
import Head from "next/head";

import WhatWeOffer from "../components/WhatWeOffer";
import CoursesOverview from "../components/CoursesOverview";
import FooterComponent from "../components/FooterComponent";
import HowItWorks from "../components/HowItWorks";
import Hero from "../components/Hero";
import supabase from "../utils/supabase";

const Home: NextPage = () => {
  console.log(supabase.auth.user())
  return (
    <>
      <Head>
        <title>Tech4All</title>
      </Head>
      <Hero />
      <WhatWeOffer />
      <CoursesOverview />
      <HowItWorks />
      <FooterComponent />
    </>
  );
};

export default Home;
