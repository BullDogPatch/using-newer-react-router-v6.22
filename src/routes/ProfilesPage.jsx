import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/utils";
import { NavLink, Outlet } from "react-router-dom";
import Home from "./Home";

const ProfilesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="pt-10 flex flex-col">
      {data?.map(({ name, username }) => (
        // fix styling on acitve class, finding tailwind difficult
        <NavLink to={`/profiles/${username}`} key={name}>
          {name}
        </NavLink>
      ))}

      <Outlet />
    </div>
  );
};

export default ProfilesPage;
