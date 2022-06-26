import { Container, createStyles, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  containerStyles: {
    maxWidth: "100%",
    borderBottom: "1px solid #E6E6E6",
  },
}));

interface Props {
  title: string;
}

const Module = ({ title }: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.containerStyles} px={30} py={20}>
        <Title order={2}>{title}</Title>
      </Container>
    </>
  );
};

export default Module;
