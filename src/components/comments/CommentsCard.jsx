import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

const CommentsCard = ({ data }) => {
  return (
    <Grid2 container spacing={2}>
      {data.map((comments) => (
        <Card sx={{ maxWidth: 345 }} key={comments.id}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {comments.id}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {comments.name}
              </Typography>
              <Divider />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {comments.email}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {comments.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid2>
  );
};

export default CommentsCard;
