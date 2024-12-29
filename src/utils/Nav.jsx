import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import { linksApi } from "./links";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box sx={{  mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          
          {linksApi.map((link) => (
            <Button color="inherit" key={link.type}>
              {" "}
              <Link
                to={link.link}
                style={{ textDecoration: "none", color: "white", fontSize: "2vw" }}
              >
                {link.type}
              </Link>{" "}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
