import { Outlet } from "react-router-dom";
import Profiles from "../routes/Profiles";

const Root = () => {
  return (
    <div className="flex">
      <Profiles />
      <Outlet />
    </div>
  );
};

export default Root;
