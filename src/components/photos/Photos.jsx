import { useQuery } from "@tanstack/react-query";
import PhotosCard from "./PhotosCard";
import { photosData } from "../../api/data";
import Loadings from "../../utils/Loadings";
import Errors from "../../utils/Errors";

const Photos = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["photos"],
    queryFn: photosData,
  });

  if (isLoading) return <Loadings />;
  if (isError) return <Errors error={error} />;

  return (
    <div>
      <PhotosCard data={data} />
    </div>
  );
};

export default Photos;
