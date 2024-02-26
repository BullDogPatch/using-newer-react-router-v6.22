import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/utils";
import { NavLink, Outlet } from "react-router-dom";

const Profiles = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="pt-10 flex flex-col">
      {data?.map(({ name, username }) => (
        // fix styling on acitve class, finding tailwind difficult
        <NavLink
          className={({ isActive }) =>
            [
              "flex items-center px-2 py-2 text-base font-medium rounded-md",
              isActive ? "text-orange bg-gray-dark" : "",
            ].join(" ")
          }
          to={`/profiles/${username}`}
          key={name}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default Profiles;
