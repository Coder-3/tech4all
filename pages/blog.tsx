import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Grid,
  Title,
  Image,
  Button,
  Anchor,
  Text,
  Center,
} from "@mantine/core";

export default function BlogPage({ blogPosts }: { blogPosts: any }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <Center mb="xl">
          <Title mb="xl" order={1}>
            Blog
          </Title>
        </Center>
        <Grid grow>
          {blogPosts.map(
            ({
              id,
              date,
              title,
              thumb,
              excerpt,
            }: {
              id: any;
              date: any;
              title: any;
              thumb: any;
              excerpt: any;
            }) => (
              <Grid.Col span={6} key={id}>
                <div
                  style={{ width: "420px", maxWidth: "90vw", margin: "auto" }}
                >
                    <Image radius="md" src={thumb} height={200} mb="xs" alt="" />
                  <Link href={`/posts/${id}`} passHref>
                    <Anchor underline={false} size="xl">
                      {title}
                    </Anchor>
                  </Link>
                  <Text>{excerpt}</Text>
                  <br />
                </div>
              </Grid.Col>
            )
          )}
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const blogPosts = getSortedPostsData();
  return {
    props: {
      blogPosts,
    },
  };
}
