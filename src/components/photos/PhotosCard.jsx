import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PhotosCard = ({ data }) => {
  return (
    <Grid2 container spacing={2}>
      {data.map((item) => (
        <Card sx={{ maxWidth: 345, minWidth: 340 }} key={item.id}>
          <CardActionArea>
            <LazyLoadImage
              height={140}
              src={item.thumbnailUrl}
              alt={`Image for ${item.title}`}
              effect="blur"
              width={"100%"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.albumId}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid2>
  );
};

export default PhotosCard;
