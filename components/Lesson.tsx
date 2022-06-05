import {
  Container,
  createStyles,
  Grid,
  Title,
  Text,
  Button,
} from "@mantine/core";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const useStyles = createStyles((theme) => ({
  containerStyles: {
    maxWidth: "100%",
  },
}));

interface Props {
  title: string;
  description: string;
  source: string;
  url: string;
  is_completed: boolean;
}

const Lesson = ({ title, description, source, url, is_completed }: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.containerStyles} px={30} py={20}>
        <Grid>
          <Grid.Col span={4}>
            <div
              style={{ width: 300, height: 150, backgroundColor: "lightgrey" }}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={2}>{title}</Title>
            <Text>{description}</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Button variant="outline">
              {is_completed ? (
                <>
                  <CheckCircledIcon />
                  Lesson Completed
                </>
              ) : (
                <>
                  <CheckCircledIcon />
                  Mark as completed
                </>
              )}
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default Lesson;
