import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
const AlbumsList = ({ data }) => {
  return (
    <Box component="div" m="0 auto" width="50%">
      {data.map((album) => (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          key={album.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={album.userId} secondary={album.title} />
          </ListItem>
        </List>
      ))}
    </Box>
  );
};

export default AlbumsList;
