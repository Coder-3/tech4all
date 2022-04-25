import Head from "next/head";
import { attributes } from "../content/home.md";
import { createStyles, Image, Button } from "@mantine/core";
import WhatWeOffer from "../components/WhatWeOffer";

const lighterOrange = "#E49759";
const lighterBlue = "#59A6E4";
const darkerOrange = "#DD7C2D";
const darkerBlue = "#2D8EDD";
const darkestBlue = "#1E73B9";

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
    background: `-webkit-linear-gradient(${darkerOrange}, ${darkerBlue})`,
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
    backgroundColor: darkerBlue,
    marginTop: "15px",

    "&:hover": {
      backgroundColor: darkestBlue,
    },
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

export default function Knowledge() {
  const { classes } = useStyles();
  const { content, title } = attributes;

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>{title}</title>
      </Head>
      <section className={classes.hero}>
        <div className={classes.halfWidth}>
          <h1 className={classes.heroHeading}>{content[0].heading}</h1>
          <p style={{ marginTop: "30px" }}>{content[0].subheading}</p>
          <Button
            className={`${classes.joinUsButton} ${classes.joinUsButtonBurger}`}
            variant="primary"
          >
            Join Us
          </Button>
        </div>
        <div className={`${classes.halfWidth} ${classes.image}`}>
          <Image src="images/people_learning.jpg" />
        </div>
      </section>
      <WhatWeOffer />
    </>
  );
}
