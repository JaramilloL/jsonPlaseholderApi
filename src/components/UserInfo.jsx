import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const UserInfo = ({ data }) => {
  return (
    <Box width="85%" m="0 auto">
      <Grid2 container spacing={2}>
        {data.map((users) => (
          <Card sx={{ minWidth: 275 }} key={users.id}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                {users.email}
              </Typography>
              <Typography variant="h5" component="div">
                {users.zipcode}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                {users.name}
              </Typography>
              <Typography variant="body2">
                {users.username}
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <Link
                  to={`/users/${users.id}`}
                  style={{
                    textDecoration: "none",
                    color: "darkcyan",
                    fontSize: "15px",
                  }}
                >
                  Learn more
                </Link>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid2>
    </Box>
  );
};

export default UserInfo;
