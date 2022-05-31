import type { NextPage } from "next";
import Head from "next/head";

import WhatWeOffer from "../components/WhatWeOffer";
import CoursesOverview from "../components/CoursesOverview";
import FooterComponent from "../components/FooterComponent";
import HowItWorks from "../components/HowItWorks";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Tech4All</title>
    </Head>
    <WhatWeOffer />
    <CoursesOverview />
    <HowItWorks />
    <FooterComponent />
  </>
);

export default Home;
