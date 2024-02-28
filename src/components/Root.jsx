import { Outlet } from "react-router-dom";
import Profiles from "../routes/Profiles";

const Root = () => {
  return (
    <div id="wrapper" className="flex min-h-screen">
      <Profiles />
      <Outlet />
    </div>
  );
};

export default Root;
