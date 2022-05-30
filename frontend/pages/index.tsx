import type { NextPage } from "next";
import Head from "next/head";

import { createStyles, Image, Button } from "@mantine/core";
import WhatWeOffer from "../components/WhatWeOffer";
import CoursesOverview from "../components/CoursesOverview";
import FooterComponent from "../components/FooterComponent";
import HowItWorks from "../components/HowItWorks";

const useStyles = createStyles((theme) => ({
  hero: {
    display: "flex",
    gap: "40px",
    marginTop: "60px",
    marginBottom: "70px",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.fn.smallerThan("md")]: {
      justifyContent: "center",
      textAlign: "center",
      overflowWrap: "break-word",
      wordWrap: "break-word",
      hyphens: "auto",
      whiteSpace: "normal",
    },

    [theme.fn.smallerThan("lg")]: {
      marginLeft: "24px",
      marginRight: "24px",
    },
  },

  halfWidth: {
    [theme.fn.largerThan("sm")]: {
      width: "50%",
    },
  },

  heroHeading: {
    fontSize: "4.5rem",
    background: `-webkit-linear-gradient(${theme.colors["dark-orange"][6]}, ${theme.colors["dark-blue"][6]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "70px",
    margin: 0,

    [theme.fn.smallerThan("md")]: {
      fontSize: "3rem",
      lineHeight: "60px",
    },
  },

  skills: {
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("sm")]: {
      marginLeft: "24px",
      marginRight: "24px",
    },
  },

  skillsHeading: {
    maxWidth: "800px",
    h2: {
      fontSize: "3.5rem",
      textAlign: "center",
      lineHeight: "50px",
    },
  },

  joinUsButton: {
    width: "336px",
    height: "auto",
    minHeight: "30px",
    color: "white",
    border: 0,
    borderRadius: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    padding: "15px 30px",
    marginTop: "15px",
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },

    img: {
      borderRadius: "24px",
    },
  },

  skillsList: {},
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Tech4All</title>
      </Head>
      <section className={classes.hero}>
        <div className={classes.halfWidth}>
          <h1 className={classes.heroHeading}>
            Empowering you to launch a software product
          </h1>
          <p style={{ marginTop: "30px" }}>
            Providing opportunities to competent and motivated individuals,
            giving them a better chance at achieving success in lif
          </p>
          <Button color="dark-blue" className={classes.joinUsButton}>
            Join Us
          </Button>
        </div>
        <div className={`${classes.halfWidth} ${classes.image}`}>
          <Image
            src="images/people_learning.jpg"
            alt="Group of people learning"
          />
        </div>
      </section>
      <WhatWeOffer />
      <CoursesOverview />
      <HowItWorks />
      <FooterComponent />
    </>
  );
};

export default Home;
