import Link from "next/link";

import {
  createStyles,
  AppShell,
  Header,
  Navbar,
  Burger,
  MediaQuery,
  Text,
  Button,
} from "@mantine/core";

import { useState } from "react";

const lighterOrange = "#E49759";
const lighterBlue = "#59A6E4";
const darkerOrange = "#DD7C2D";
const darkerBlue = "#2D8EDD";
const darkestBlue = "#1E73B9";

const useStyles = createStyles((theme) => ({
  navBurger: {
    display: "flex",
    alignItems: "center",
    paddingTop: "30px",
    [theme.fn.largerThan("md")]: {
      display: "none",
    },

    a: {
      color: "black",
      fontSize: "1.2rem",
      textDecoration: "none",
      margin: "0 10px",
      color: "black",
    },
  },

  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",

    a: {
      color: "black",
      fontSize: "1.2rem",
      textDecoration: "none",

      "&:hover": {
        color: darkerBlue,
      },
    },

    [theme.fn.smallerThan("lg")]: {
      justifyContent: "space-between",
      marginLeft: "24px",
      marginRight: "24px",
    },
  },

  links: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 50,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  joinUsButton: {
    width: "200px",
    height: "auto",
    minHeight: "30px",
    color: "white",
    border: 0,
    borderRadius: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    padding: "15px 30px",
    backgroundColor: darkerBlue,

    "&:hover": {
      backgroundColor: darkestBlue,
    },
  },

  joinUsButtonDesktop: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  joinUsButtonBurger: {
    marginBottom: "15px",
  },

  logo: {
    width: "200px",
  },
}));

const Navigation = ({ children }) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      padding="0"
      header={
        <Header height={100}>
          <div className={classes.navContainer}>
            <div className={classes.logo}>
              <Text variant="h2">Tech4All</Text>
            </div>
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
              />
            </MediaQuery>
            <div className={classes.links}>
              <Link href="/vision">Vision</Link>
              <Link href="/learn">Learn</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </div>
            <div className={classes.joinUsButtonDesktop}>
              <Button variant="primary" className={classes.joinUsButton}>
                Join Us
              </Button>
            </div>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          className={classes.navBurger}
          width={{ base: "100%", md: 0 }}
          hidden={!opened}
        >
          <Button
            className={`${classes.joinUsButton} ${classes.joinUsButtonBurger}`}
            variant="primary"
          >
            Join Us
          </Button>
          <Link href="/vision">Vision</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
};

export default Navigation;
