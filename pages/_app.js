import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Navigation from "../components/Navigation";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          lighterOrange: "#E49759",
          lighterBlue: "#59A6E4",
          darkerOrange: "#DD7C2D",
          darkerBlue: "#2D8EDD",
          darkestBlue: "#1E73B9",

          fontFamily: "Ubuntu, sans-serif",

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
            backgroundColor: "#2D8EDD",
            marginTop: "15px",
        
            "&:hover": {
              backgroundColor: "#1E73B9",
            },
          },
        }}
        style=
      >
        <Navigation>
          <Component {...pageProps} style={{ background: 'url("../images/noise.png")' }} />
        </Navigation>
      </MantineProvider>
    </>
  );
}
