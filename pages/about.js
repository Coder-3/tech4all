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
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionText: {
    display: "flex",
    width: "1200px",
    flexDirection: "column",
    paddingTop:"20px",
    paddingBottom:"20px",
  },
  headerText: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
  },
  whoWeAre: {
    display: "flex",
    color: darkerBlue,
    fontSize:"2.2rem",
    textTransform: "uppercase",
    margin: "0"
  },
  ourPurposes: {
    display: "flex",
    fontSize: "3.75rem",
    margin: "0",
    width: "70%",
    lineHeight: "1",
    paddingBottom: "30px",
  },
  reusableHeaders: {
    display: "flex",
    fontSize: "3rem",
    margin: "0",
    width: "70%",
    lineHeight: "1",
    paddingBottom: "30px",
  },
  headerImage: {
    width: "100%",
    maxHeight: "auto",
    clip:"rect(0px,200px,200px,0px)" ,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    [theme.fn.smallerThan("md")]: {
      display: "none",
      
    },
  },
  aboutUsText: {
    width: "800px",
    fontSize: "1.6rem",
    lineHeight: "1.75",
    paddingBottom:"5px",
  },
  textContainer: {
    padding: "2.5rem",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    background: darkerBlue,
  },
  roundedTextContainer: {
    display: "flex",
    justifyContent: "center",
    background: darkerBlue,
  },
  emphashisText: {
    width: "1200px",
    fontSize: "3rem",
    color: "white",
    lineHeight: "1",
  },
  coolLine: {
    height: "5px",
    width: "30px",
    background: lighterBlue
  }
}));

export default function About() {
  const { classes } = useStyles();
  const { content, title } = attributes;

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.sectionText}>
          <div className={classes.headerText}>
            <h2 className={classes.whoWeAre}>
              Who we are
            </h2>
            <h1 className={classes.ourPurposes}>
              Our motivation to drive success in individuals
            </h1>
          </div>
        </div>
        <img className={classes.headerImage} src="images/cropped.png"></img>
        <div className={classes.textContainer}>
          <h3 className={classes.emphashisText}>
            We started Tech4All because we believe everyone should get the opportunity to create something from what little they have.
          </h3>
        </div>

        <div className={classes.sectionText}>
          <p className={classes.aboutUsText}>
            We are a world of ideas, but not enough of them come into fruition.
            As much as we have noticed that the education system is changing, we want to give the less fortunate a chance to learn, churn and earn,
            all while dedicating themselves to creating their very own software as a service startup. We are just here to assist them along their journey.
            <br />
            <br />
            Unfortunately, there are a lot of unrecognised, talented people across the globe. Most of which, live in underdeveloped regions with very basic living standards.
            We plan to target these individuals and educate them on the basics of technology, design and business concepts, so they can create their very own startup with our help.
            Anyone with a device, internet connection and willingness to learn courses across 6 months are eligible. It’s as simple as that!
          </p>
        </div>

        <div className={classes.sectionText}>
          <h2 className={classes.whoWeAre}>
            Our values
          </h2>
        </div>

        <div className={classes.sectionText}>
          <h1 className={classes.reusableHeaders}>
            Helping, not selling
          </h1>
          <div className={classes.coolLine} />
          <p className={classes.aboutUsText}>
            We want to give purpose to individuals with less opportunity, while keeping them self-sustainable through financial independence.
            As opposed to traditional business models, we are aiming to help our clients rather than sell to them.
            This is why all our courses are free and we have no pay for premium options.
          </p>
        </div>

        <div className={classes.sectionText}>
          <h1 className={classes.reusableHeaders}>
            Collaborative, not competitive
          </h1>
          <div className={classes.coolLine} />
          <p className={classes.aboutUsText}>
            Building a community of like-minded individuals that are constantly collaborating by sharing, rather than competing by keeping new ideas and innovative solutions.
            We strongly believe that working together is the way forward.
          </p>
        </div>

        <div className={classes.sectionText}>
          <h1 className={classes.reusableHeaders}>
            Pass for premium, not pay for premium
          </h1>
          <div className={classes.coolLine} />
          <p className={classes.aboutUsText}>
            With the help of our immersive online courses and knowledge packs, we give all our users the opportunity to learn.
            With this knowledge, they can pitch us a saas idea that they are ambitious about through an interview and if they qualify,
            they unlock access to our ‘premium services’ which will help them persure and build their product.
          </p>
        </div>

        <div className={classes.sectionText}>
          <h1 className={classes.reusableHeaders}>
            Sustainability, not rapid growth
          </h1>
          <div className={classes.coolLine} />
          <p className={classes.aboutUsText}>
            We advocate successful sustainable practices that foster long-term acomplishments, rather than rapid, risky growth.
          </p>
        </div>

      </div>



      <FooterComponent />
    </>
  );
}


