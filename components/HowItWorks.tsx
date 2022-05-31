import { createStyles, useMantineTheme } from "@mantine/core";

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
  const theme = useMantineTheme();

  return (
    <section>
      <h2 className={classes.heading}>How it works</h2>
      <div className={classes.stepsContainer}>
        <div style={{ backgroundColor: theme.colors["light-orange"][4] }}>
          <p>Complete courses to learn from scratch</p>
        </div>
        <div style={{ backgroundColor: theme.colors["dark-orange"][6] }}>
          <p>Think of an idea that solves problem</p>
        </div>
        <div style={{ backgroundColor: theme.colors["light-blue"][4] }}>
          <p>Apply to join us and pass our entrance test</p>
        </div>
        <div style={{ backgroundColor: theme.colors["dark-blue"][6] }}>
          <p>Pitch us your idea as a team or an individual</p>
        </div>
        <div style={{ backgroundColor: theme.colors["darkest-blue"][6] }}>
          <p>Once qualified, get funding and support while you build</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
