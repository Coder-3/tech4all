import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { Container } from "@mantine/core";

import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  postContainer: {
    img: {
      display: "flex",
      width: "60vw",
      [theme.fn.smallerThan("md")]: {
        width: "100%",
      },
      margin: "auto"
    },
  },
}));

export default function Post({ postData }: { postData: any }) {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <h1>{postData.title}</h1>
        <div
          className={classes.postContainer}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
