import { createStyles } from "@mantine/core";

const lighterOrange = "#E49759";
const lighterBlue = "#59A6E4";
const darkerOrange = "#DD7C2D";
const darkerBlue = "#2D8EDD";
const darkestBlue = "#1E73B9";

const useStyles = createStyles((theme) => ({
  heading: {
    fontSize: "3.5rem",
    marginBottom: "30px",
    lineHeight: "70px",
    textAlign: "center",
    [theme.fn.smallerThan("md")]: {
      fontSize: "3rem",
      lineHeight: "60px",
    },
  },

  stepsContainer: {
    display: "flex",
    maxWidth: "1200px",
    margin: "auto",

    div: {
      display: "flex",
      alignItems: "center",
      width: "20%",
      padding: "20px",
      textAlign: "center",

      p: {
        fontSize: "1.5rem",
        color: "#fff",
      },
    },

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",

      div: {
        width: "100%",
      },
    },
  },
}));

const HowItWorks = () => {
  const { classes } = useStyles();
  return (
    <section>
      <h2 className={classes.heading}>How it works</h2>
      <div className={classes.stepsContainer}>
        <div style={{ backgroundColor: lighterOrange }}>
          <p>Complete courses to learn from scratch</p>
        </div>
        <div style={{ backgroundColor: darkerOrange }}>
          <p>Think of an idea that solves problem</p>
        </div>
        <div style={{ backgroundColor: lighterBlue }}>
          <p>Apply to join us and pass our entrance test</p>
        </div>
        <div style={{ backgroundColor: darkerBlue }}>
          <p>Pitch us your idea as a team or an individual</p>
        </div>
        <div style={{ backgroundColor: darkestBlue }}>
          <p>Once qualified, get funding and support while you build</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
