import { useQuery } from "@tanstack/react-query";
import AlbumsList from "./AlbumsList";
import { albumsData } from "../../api/data";
import Loadings from "../../utils/Loadings";
import Errors from "../../utils/Errors";

const Albums = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["albums"],
    queryFn: albumsData,
  });

  if (isLoading) return <Loadings />;
  if (isError) return <Errors error={error} />;

  return (
    <div>
      <AlbumsList data={data} />
    </div>
  );
};

export default Albums;
