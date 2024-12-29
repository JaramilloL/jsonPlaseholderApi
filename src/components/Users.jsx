import { useQuery } from "@tanstack/react-query";
import { userData } from "../api/data";
import UserInfo from "./UserInfo";
import { Box } from "@mui/material";

const Users = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: userData,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <Box component="div">
      <UserInfo data={data} />
    </Box>
  );
};

export default Users;
