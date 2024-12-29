import { useQuery } from "@tanstack/react-query";
import TodoCard from "./TodoCard";
import { todoData } from "../../api/data";
import Loadings from "../../utils/Loadings";
import Errors from "../../utils/Errors";

const Todos = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: todoData,
  });

  if (isLoading) return <Loadings />;
  if (isError) return <Errors error={error} />;

  return (
    <div>
      <TodoCard data={data} />
    </div>
  );
};

export default Todos;
