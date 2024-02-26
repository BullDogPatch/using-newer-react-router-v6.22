import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchUserByUsername } from "../utils/utils";
import maleImage from "../assets/malepic.png";
import femaleImage from "../assets/femalepic.png";

const ProfilePage = () => {
  const { username } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["username", username],
    queryFn: () => fetchUserByUsername(username),
  });

  const dataIntoObject = { ...data };

  // TODO: fix loading state and where the loading for single user happens
  if (isLoading) return <div></div>;

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-2xl text-slate-200 py-2 hover:text-gray-900">
            {data[0].name}
          </h2>
          <p className="py-1"> City: {data[0].address.city}</p>
          <address>
            <p className="text-sky-400">
              Street: <span>{data[0].address.street}</span>
            </p>
            <p>
              Suite: <span>{data[0].address.suite}</span>
            </p>
            <p>
              Zip Code: <span>{data[0].address.zipcode}</span>
            </p>
          </address>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
