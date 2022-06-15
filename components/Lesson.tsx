import {
  Container,
  createStyles,
  Grid,
  Title,
  Text,
  Button,
  Divider,
  Space,
  Center,
  Anchor,
} from "@mantine/core";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  wrapper: {
    "&:hover": {
      backgroundColor: theme.colors.gray[1],
    },
  },

  lessonLink: {
    textDecoration: "none",

    "&:hover": {
      textDecoration: "none",
    },
  },

  containerStyles: {
    maxWidth: 1200,
  },

  title: {
    color: theme.colors.dark[6],
  },

  description: {
    color: theme.colors.dark[4],
  },

  greyedCheck: {
    color: theme.colors.gray[5],
  },

  uncheckedButton: {
    "&:hover": {
      backgroundColor: theme.colors.gray[2],
    },
  }
}));

interface Props {
  title: string;
  description: string;
  source: string;
  url: string;
  thumbnailURL: string;
  toggleCompleted: (lessonId: string) => void;
  is_completed: boolean;
}

const Lesson = ({ title, description, source, url, thumbnailURL, toggleCompleted, is_completed }: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Anchor href={url} className={classes.lessonLink} target="_blank" rel="noopener noreferrer">
        <Container className={classes.containerStyles} px={30} py={40}>
          <Grid>
            <Grid.Col span={4}>
              {thumbnailURL.slice(-4) !== "null" ? (
                <Image
                  src={thumbnailURL}
                  width={250}
                  height={150}
                  alt={title}
                  objectFit="cover"
                />
              ) : (
                <div
                  style={{ width: 250, height: 150, backgroundColor: "lightgrey" }}
                />
              )}
            </Grid.Col>
            <Grid.Col span={4}>
              <Title order={2} pb={10} className={classes.title}>
                {title}
              </Title>
              <Text className={classes.description}>{description}</Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Center style={{ height: "100%" }}>
                {is_completed ? (
                  <Button style={{ zIndex: "-1" }} onClick={() => toggleCompleted} color="green">
                    <CheckCircledIcon />
                    <Space w="sm" />
                    Lesson Completed
                  </Button>
                ) : (
                  <Button color="gray" className={classes.uncheckedButton} variant="outline">
                    <CheckCircledIcon className={classes.greyedCheck} />
                    <Space w="sm" />
                    Mark as completed
                  </Button>
                )}
              </Center>
            </Grid.Col>
          </Grid>
        </Container>
        <Divider />
      </Anchor>
    </div>
  );
};

export default Lesson;