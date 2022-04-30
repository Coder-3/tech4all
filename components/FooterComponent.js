import { createStyles, keyframes } from "@mantine/core";
import { Footer, Button } from "@mantine/core";

const lighterOrange = "#E49759";
const lighterBlue = "#59A6E4";
const darkerOrange = "#DD7C2D";
const darkerBlue = "#2D8EDD";
const darkestBlue = "#1E73B9";

// export const gradient = keyframes({
//   "0%":   { transform: 'translate(0, -50%)' },
//   "50%":  { transform: 'translate(-75%, 0)' },
//   "100%": { transform: 'translate(0, -50%)' },
// });

const useStyles = createStyles((theme) => ({
  footerContainer: {
    display: "flex",
    flexDirection: "column"
  },

  logoCta: {
    display: "flex",
    justifyContent: "space-between"
  },

  row: {
    display: "flex",
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

  // container: {
  //   width: "100vw",
  //   height: "100vh",
  //   overflow: "hidden",
  // },
  
  // bg: { 
  //   width: "400%",
  //   height: "400%",
  //   background: "linear-gradient(0.33turn, #f6a192, #ffd9df, #f6c492, #f6a192)",
  //   backgroundSize: "100% 100%",
  //   animation: `${gradient} 12s ease infinite`,
  // },

}));

const FooterComponent = () => {
  const { classes } = useStyles();

  return (
    <Footer className={`${classes.footerContainer} ${classes.container}`}>
      <div className={`${classes.logoCta} ${classes.bg}`}>
        <div>
          <p>Tech4All</p>
        </div>
        <div>
          <Button
              className={classes.joinUsButton}
              variant="primary"
            >
              Join Us
            </Button>
        </div>
      </div>
      <div className={classes.row}>

      </div>
    </Footer>
  )
}

export default FooterComponent;