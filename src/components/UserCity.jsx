import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";
import UserGeo from "./UserGeo";

const UserCity = ({ data }) => {
  return (
    <Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 600,
          bgcolor: "background.paper",
          border: 1,
          borderColor: "black",
          boxShadow: "10",
          p: 2,
          m: 3,
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Street: ${data.address.street}`}
            secondary={`City: ${data.address.city}`}
          />
          <ListItemText
            primary={`Street: ${data.address.suite}`}
            secondary={`City: ${data.address.zipcode}`}
          />
        </ListItem>
      </List>

      <Box width="100%">
        <UserGeo data={data} />
      </Box>

      <Button size="small" variant="contained" sx={{ m: 2 }}>
        <Link to={`/users`} style={{ textDecoration: "none", color: "white" }}>
          Back
        </Link>
      </Button>
    </Box>
  );
};

export default UserCity;
