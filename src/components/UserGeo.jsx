import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const UserGeo = ({ data }) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Latitude: {data.address.geo.lat}
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Longirude
          </Typography>
          <Typography variant="body2">{data.address.geo.lng}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserGeo;
