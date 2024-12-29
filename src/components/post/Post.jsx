import { useQuery } from "@tanstack/react-query";
import { postData } from "../../api/data";
import Errors from "../../utils/Errors";
import Loadings from "../../utils/Loadings";
import PostCard from "./PostCard";

const Post = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: postData,
  });

  if (isLoading) return <Loadings />;
  if (isError) return <Errors error={error} />;

  return (
    <div>
      <PostCard data={data} />
    </div>
  );
};

export default Post;
