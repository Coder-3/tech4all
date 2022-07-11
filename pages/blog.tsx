import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Grid,
  Title,
  Image,
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
        <Grid grow gutter="xl">
          {blogPosts.map(
            ({
              id,
              readableDate,
              author,
              title,
              thumb,
              excerpt,
              readingTime,
            }: {
              id: any;
              readableDate: any;
              author: string;
              title: any;
              thumb: any;
              excerpt: any;
              readingTime: string;
            }) => (
              <Grid.Col span={6} key={id}>
                <div
                  style={{ width: "420px", maxWidth: "90vw", margin: "auto" }}
                >
                  <Image
                    radius="md"
                    src={thumb}
                    height={200}
                    alt=""
                    style={{ marginBottom: "4px" }}
                  />
                  <Link href={`/posts/${id}`} passHref>
                    <Anchor underline={false} size="xl">
                      {title}
                    </Anchor>
                  </Link>
                  <Text>{excerpt}</Text>
                  <div
                    style={{ display: "flex", gap: "6px", marginTop: "4px" }}
                  >
                    <Text size="sm">{author} |</Text>
                    <Text size="sm">{readableDate} |</Text>
                    <Text size="sm">{readingTime}</Text>
                  </div>
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
