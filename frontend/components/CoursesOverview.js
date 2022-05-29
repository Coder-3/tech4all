import Course from "./Course";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  coursesSection: {
    marginTop: "70px",
  },

  coursesContainer: {
    display: "flex",
    maxWidth: "1200px",
    margin: "auto",
    columnGap: "40px",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      columnGap: "0px",
    },
  },

  heading: {
    fontSize: "3.5rem",
    lineHeight: "70px",
    textAlign: "center",
    marginBottom: "30px",
    [theme.fn.smallerThan("md")]: {
      fontSize: "3rem",
      lineHeight: "60px",
      margin: "auto",
    },
  },


}))

const CoursesOverview = () => {
  const { classes } = useStyles();
  return (
    <section className={classes.coursesSection}>
        <h2 className={classes.heading}>Courses</h2>
      <div className={classes.coursesContainer}>
        <Course
          image="images/people_learning.jpg"
          name="Programming Course"
          description="Learn the coding skills you need to create a software product from scratch"
          skills={["HTML", "CSS", "JavaScript", "React", "Node.js"]}
          link="https://www.udemy.com/course/the-complete-web-developer-course-2/"
        />
        <Course
          image="images/people_learning.jpg"
          name="Programming Course"
          description="Learn the coding skills you need to create a software product from scratch"
          skills={["HTML", "CSS", "JavaScript", "React", "Node.js"]}
          link="https://www.udemy.com/course/the-complete-web-developer-course-2/"
        />
        <Course
          image="images/people_learning.jpg"
          name="Programming Course"
          description="Learn the coding skills you need to create a software product from scratch"
          skills={["HTML", "CSS", "JavaScript", "React", "Node.js"]}
          link="https://www.udemy.com/course/the-complete-web-developer-course-2/"
        />
      </div>
    </section>
  );
};

export default CoursesOverview;
