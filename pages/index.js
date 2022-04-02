import Head from "next/head"
import { attributes } from '../content/home.md';
import {
  createStyles,
  AppShell,
  Header,
  Navbar,
  Burger,
  MediaQuery,
  Text,
  Anchor
} from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    margin: '0 20px'
  },

  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    gap: 20,
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  }
}));

export default function Knowledge() {
  const { classes } = useStyles()
  const [opened, setOpened] = useState(false)
  const { content, title } = attributes

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>{title}</title>
      </Head>
      <AppShell
        fixed
        navbarOffsetBreakpoint="sm"
        header={
          <Header height={50}>
            <div className={classes.navContainer}>
              <div>
                <Text variant="h2">techforall</Text>
              </div>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  mr="xl"
                />
              </MediaQuery>
              <div className={classes.links}>
                <Anchor>Vision</Anchor>
                <Anchor>Learn</Anchor>
                <Anchor>Blog</Anchor>
                <Anchor>About</Anchor>
              </div>
            </div>
          </Header>
        }
        navbar={
          <Navbar
            className={classes.navbar}
            width={{ base: "100%", sm: 0 }}
            hidden={!opened}
          >
            <Anchor>Vision</Anchor>
            <Anchor>Learn</Anchor>
            <Anchor>Blog</Anchor>
            <Anchor>About</Anchor>
          </Navbar>
        }
      >
        <article>
          <h1>{content[0].heading}</h1>
          <h2>{content[0].subheading}</h2>
        </article>
      </AppShell>
    </>
  )
}