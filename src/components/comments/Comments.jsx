import { useQuery } from "@tanstack/react-query";
import React from "react";
import { commentsData } from "../../api/data";
import Loadings from "../../utils/Loadings";
import Errors from "../../utils/Errors";
import CommentsCard from "./CommentsCard";

const Comments = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments"],
    queryFn: commentsData,
  });
  if (isLoading) return <Loadings />;
  if (isError) return <Errors error={error} />;

  return (
    <div>
      <CommentsCard data={data} />
    </div>
  );
};

export default Comments;
