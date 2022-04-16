import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    border: `1px solid ${theme.colors.grey[300]}`,
    borderRadius: theme.radii.md,
    padding: theme.spacings.md,
  },
}));

const VerticalExplanation = ({ heading, points }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>{heading}</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}