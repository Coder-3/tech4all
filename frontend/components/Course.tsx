import { Button, createStyles, Image } from "@mantine/core";
import Link from "next/link";

const lighterOrange = "#E49759";
const lighterBlue = "#59A6E4";
const darkerOrange = "#DD7C2D";
const darkerBlue = "#2D8EDD";
const darkestBlue = "#1E73B9";

const useStyles = createStyles((theme) => ({
  courseContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    maxWidth: "33%",
    borderRadius: "24px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",

    img: {
      borderRadius: "24px 24px 0 0",
    },

    [theme.fn.smallerThan("md")]: {
      maxWidth: "80%",
      margin: "20px auto",
    },
  },

  row: {
    margin: "20px",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },

  learnMoreButton: {
    width: "90%",
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
}));

interface CourseProps {
  image: string;
  name: string;
  description: string;
  skills: string[];
  link: string;
}

const Course = ({ image, name, description, skills, link }: CourseProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.courseContainer}>
      <Image src={image} alt="" />
      <div className={classes.row}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.row}>
        <h3>Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={`${classes.row} ${classes.buttonContainer}`}>
        <Button className={classes.learnMoreButton}>Learn More</Button>
      </div>
    </div>
  );
};

export default Course;
