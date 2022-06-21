import type { AppProps } from "next/app";
import Head from "next/head";
import {
  AppShell,
  Burger,
  Button,
  Global,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Text,
  createStyles,
  Space,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
        color: "#2D8EDD",
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

    span: {
      color: "white",
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
    display: "flex",
    alignItems: "center",
  },
}));

export default function MyApp({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={(theme) => ({
          html: {
            boxSizing: "border-box",
          },
          body: {
            minHeight: "100%",
            margin: 0,
          },
          main: {
            paddingRight: "0 !important",
            paddingLeft: "0 !important",
            paddingBottom: "0 !important",
          },
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
        })}
      />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "Ubuntu, sans-serif",
          colors: {
            "light-orange": [
              "#EFE7E1",
              "#E3D1C3",
              "#DDBDA3",
              "#DDA980",
              "#E49759",
              "#CF884E",
              "#BB7A46",
              "#9E6F49",
              "#876549",
              "#745B48",
            ],
            "light-blue": [
              "#E1E9EF",
              "#C3D5E3",
              "#A3C3DD",
              "#80B3DD",
              "#59A6E4",
              "#4E96CF",
              "#4687BB",
              "#49789E",
              "#496B87",
              "#486074",
            ],
            "dark-orange": [
              "#EFEBE8",
              "#E0D5CD",
              "#D5C1B1",
              "#CEAE94",
              "#CC9C76",
              "#D18C54",
              "#DD7C2D",
              "#BD7133",
              "#9D673A",
              "#855D3D",
            ],
            "dark-blue": [
              "#E8ECEF",
              "#CDD7E0",
              "#B1C5D5",
              "#94B4CE",
              "#76A5CC",
              "#5499D1",
              "#2D8EDD",
              "#337FBD",
              "#3A719D",
              "#3D6585",
            ],
            "darkest-blue": [
              "#B2C0CB",
              "#9AAFC0",
              "#81A0BA",
              "#6693B8",
              "#4888BC",
              "#327DBA",
              "#1E73B9",
              "#296699",
              "#2F5B7F",
              "#31516B",
            ],
          },
          primaryColor: "dark-blue",
        }}
      >
        <AppShell
          fixed
          navbarOffsetBreakpoint="sm"
          header={
            <Header height={100}>
              <div className={classes.navContainer}>
                <div className={classes.logo}>
                  <Image src="/images/t4a_logo.png" alt="T4A logo" width={64} height={64} />
                  <Space w="xs" />
                  <Text>Tech4All</Text>
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
              </div>
            </Header>
          }
          navbar={
            <Navbar
              className={classes.navBurger}
              width={{ base: "100%", md: 0 }}
              hidden={!opened}
            >
              <Link href="/login" passHref>
                <Button
                  component="a"
                  color="dark-blue"
                  className={classes.joinUsButton}
                >
                  Join Us
                </Button>
              </Link>
              <Link href="/vision">Vision</Link>
              <Link href="/learn">Learn</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </Navbar>
          }
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
