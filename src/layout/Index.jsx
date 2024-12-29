import { Outlet } from "react-router-dom";
import Nav from "../utils/Nav";

const Index = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Index;
