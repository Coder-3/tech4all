import { createStyles } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Image } from "@mantine/core";

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
  whatWeOffer: {
    display: "flex",
    justifyContent: "center",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 24px",
    gap: "10px",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  rightImage: {
    maxWidth: "auto",
    maxHeight: "300px",
    borderRadius: "24px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  description: {
    fontSize: "25px",
    lineHeight: "28px",
  },
  skillsList: {
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  listItem: {
    margin: "10px 0",
    fontSize: "18px",
  },

  checkIcon: {
    color: theme.colors["light-blue"][4],
  },
}));

const WhatWeOffer = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.whatWeOffer}>
      <section className={classes.section}>
        <section className={classes.leftSection}>
          <h2 className={classes.heading}>Acquire skills</h2>
          <p className={classes.description}>
            We’ll teach you the necessary skills to code, design and manage your
            own business
          </p>

          <ul className={classes.skillsList}>
            <li className={classes.listItem}>
              {" "}
              <FontAwesomeIcon
                className={classes.checkIcon}
                icon={faCircleCheck}
              />{" "}
              <span>Step-by-step learning roadmap</span>{" "}
            </li>
            <li className={classes.listItem}>
              {" "}
              <FontAwesomeIcon
                className={classes.checkIcon}
                icon={faCircleCheck}
              />{" "}
              <span>Boilerplate code to hit the ground running</span>{" "}
            </li>
            <li className={classes.listItem}>
              {" "}
              <FontAwesomeIcon
                className={classes.checkIcon}
                icon={faCircleCheck}
              />{" "}
              <span>
                Guidance and mentorship from our programming experts and
                business professionals
              </span>{" "}
            </li>
            <li className={classes.listItem}>
              {" "}
              <FontAwesomeIcon
                className={classes.checkIcon}
                icon={faCircleCheck}
              />{" "}
              <span>
                De-risk your entrepreneurial journey by getting paid to build
              </span>{" "}
            </li>
            <li className={classes.listItem}>
              {" "}
              <FontAwesomeIcon
                className={classes.checkIcon}
                icon={faCircleCheck}
              />{" "}
              <span>Get access to a network of founders</span>{" "}
            </li>
            <li className={classes.listItem}>
              {" "}
              <FontAwesomeIcon
                className={classes.checkIcon}
                icon={faCircleCheck}
              />{" "}
              <span>Gain access to workshops and educational talks</span>{" "}
            </li>
          </ul>
        </section>

        <section className={classes.rightSection}>
          <Image
            className={classes.rightImage}
            src="images/people_learning.jpg"
            alt=""
          />
        </section>
      </section>
    </section>
  );
};

export default WhatWeOffer;
