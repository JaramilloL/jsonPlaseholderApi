import { Alert } from "@mui/material";

const Errors = ({ error }) => {
  return <Alert severity="error">{error.message}</Alert>;
};

export default Errors;
