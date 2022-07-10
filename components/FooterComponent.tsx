import { createStyles, Space } from "@mantine/core";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
    paddingBottom: 0,
    marginTop: "100px",
    backgroundColor: theme.colors["dark-orange"][6],
  },

  logoCta: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    borderBottom: `1px solid ${theme.colors["light-orange"][4]}`,

    "& p": {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "white",
    },

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "10px",
      borderBottom: "none",

      "& p": {
        margin: 0,
      },
    },
  },

  links: {
    marginTop: "24px",

    "& a": {
      color: "white",
      textDecoration: "none",
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "10px",
      "&:hover": {
        textDecoration: "underline",
      },
    },

    [theme.fn.smallerThan("sm")]: {
      marginTop: "30px",
    },
  },

  copyright: {
    marginTop: "60px",
    color: "white",
  },

  joinUsButton: {
    width: "250px",
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

  logo: {
    display: "flex",
    alignItems: "center",
  },
}));

const FooterComponent = () => {
  const { classes } = useStyles();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footerContainer}>
      <div className={classes.logoCta}>
        <div className={classes.logo}>
          <Image src="/images/t4a_logo.png" alt="T4A Logo" width={64} height={64} />
          <Space w="xs" />
          <p>Tech4All</p>
        </div>
        <div>
          <Link href="/login" passHref>
            <Button
              component="a"
              color="dark-blue"
              className={classes.joinUsButton}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
      <div className={classes.links}>
        <Link href="/">Home</Link>
        <Link href="/learn">Learn</Link>
      </div>
      <div className={classes.copyright}>
        <p>© {currentYear} Tech4All</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
