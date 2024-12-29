import { Card, CardContent, Grid2, Typography } from "@mui/material";

const TodoCard = ({ data }) => {
  return (
    <Grid2 container spacing={2}>
      {data.map((item) => (
        <Card sx={{ minWidth: 340, maxWidth: 350 }} key={item.id}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {item.id}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color={item.completed ? "success" : "error"}
            >
              {item && item.completed ? "Completed" : "No completed"}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              adjective
            </Typography>
            <Typography variant="body2">{item.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid2>
  );
};

export default TodoCard;
