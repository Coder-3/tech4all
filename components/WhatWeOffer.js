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
}));

const WhatWeOffer = () => {
  const { classes } = useStyles();

  return (
    <section>
      <h2 className={classes.heading}>works</h2>
    </section>
  )
}

export default WhatWeOffer;