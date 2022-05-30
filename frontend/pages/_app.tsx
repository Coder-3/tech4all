import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Navigation from "../components/Navigation";

export default function MyApp({ Component, pageProps }: AppProps) {
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
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </MantineProvider>
    </>
  );
}
