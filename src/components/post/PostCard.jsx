import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

const PostCard = ({ data }) => {
  return (
    <Grid2 container spacing={2}>
      {data.map((post) => (
        <Card sx={{ maxWidth: 345, minWidth: 345 }} key={post.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/600/92c952"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong>Id: </strong>
                {post.id}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>Title: </strong>
                {post.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid2>
  );
};

export default PostCard;
