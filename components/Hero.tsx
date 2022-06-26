import { createStyles } from "@mantine/core";
import { Button, Image } from "@mantine/core";
import Link from "next/link";

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

  joinUsButton: {
    width: "300px",
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
}));

const Hero = () => {
  const { classes } = useStyles();
  return (
    <section className={classes.hero}>
      <div className={classes.halfWidth}>
        <h1 className={classes.heroHeading}>
          Empowering you to launch a software product
        </h1>
        <p style={{ marginTop: "30px" }}>
          Providing opportunities to competent and motivated individuals, giving
          them a better chance at achieving success in lif
        </p>
        <Link href="/login" passHref>
          <Button
            component="a"
            color="dark-blue"
            className={classes.joinUsButton}
          >
            Join Us
          </Button>
        </Link>
      </div>
      <div className={`${classes.halfWidth} ${classes.image}`}>
        <Image
          src="images/collaboration.jpg"
          alt="Group of people learning"
        />
      </div>
    </section>
  );
};

export default Hero;
