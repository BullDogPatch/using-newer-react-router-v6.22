import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/utils";
import { NavLink } from "react-router-dom";

const ProfilesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <ul>
        {data?.map(({ name, username }) => (
          <li key={name} className="list-none no-underline hover:underline">
            <NavLink to={`/profiles/${username}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesPage;
