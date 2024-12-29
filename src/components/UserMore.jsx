import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { oneUserData } from "../api/data";
import Loadings from "../utils/Loadings";
import { Alert, Box } from "@mui/material";
import UserCity from "./UserCity";
import Errors from "../utils/Errors";

const UserMore = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", id],
    queryFn: oneUserData,
  });

  if (isLoading) return <Loadings />;
  if (isError) return <Errors error={error} />;

  return (
    <Box component="div" width="50%" m="0 auto">
      <UserCity data={data} />
    </Box>
  );
};

export default UserMore;
