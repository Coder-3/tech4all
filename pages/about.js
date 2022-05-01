import Head from "next/head";
import { attributes } from "../content/home.md";
import { createStyles, Image, Button } from "@mantine/core";
import FooterComponent from "../components/FooterComponent";

const lighterOrange = "#E49759";
const lighterBlue = "#59A6E4";
const darkerOrange = "#DD7C2D";
const darkerBlue = "#2D8EDD";
const darkestBlue = "#1E73B9";

const useStyles = createStyles((theme) => ({
  aboutUs: {
    display:"flex",
    maxWidth: "1200px",
    justifyContent: "center",
  },
  header: {
    display:"flex",
    justifyContent: "left",
    alignItems:""
  },
  whoWeAre: {
    display:"flex",
    justifyContent: "left",
    color: darkerBlue,
    textTransform: "uppercase",
  }
}));

export default function About() {
  const { classes } = useStyles();
  const { content, title } = attributes;

  return (
    <>
      <div className={classes.aboutUs}>
        <div className={classes.header}>
          <h2 className={classes.whoWeAre}>
            Who we are
          </h2>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}


