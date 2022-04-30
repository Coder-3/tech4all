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
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Navigation>
          <Component {...pageProps} style={{ background: 'url("../images/noise.png")' }} />
        </Navigation>
      </MantineProvider>
    </>
  );
}
