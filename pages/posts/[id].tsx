import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { Avatar, Container, Text, Title } from "@mantine/core";

import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  postContainer: {
    img: {
      display: "flex",
      width: "40vw",
      [theme.fn.smallerThan("xl")]: {
        width: "50vw",
      },

      [theme.fn.smallerThan("md")]: {
        width: "90%",
      },
      margin: "auto",
    },
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
}));

export default function Post({ postData }: { postData: any }) {
  const { classes } = useStyles();
  const authorInitials = postData.author
    .split(" ")
    .map((name: string) => name[0])
    .join("");
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container size={800}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div style={{ width: "50px" }}>
            <Avatar color="blue" radius="xl">
              {authorInitials}
            </Avatar>
          </div>
          <div className={classes.detailsContainer}>
            <div>
              <Text>{postData.author}</Text>
            </div>
            <div style={{ display: "flex" }}>
              <Text size="sm">{postData.readableDate} |</Text>
              <Text size="sm" style={{ marginLeft: "4px" }}>
                {postData.readingTime}
              </Text>
            </div>
          </div>
        </div>
        <Title order={1}>{postData.title}</Title>
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
