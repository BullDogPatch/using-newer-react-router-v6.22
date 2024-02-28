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
  if (isLoading) return <div>loading</div>;

  return (
    <>
      <div className="min-w-[80%] flex justify-center bg-gray-dark">
        <div className="h-screen flex  flex-col justify-center">
          <h2 className="text-2xl font-bold text-slate-200 py-2">
            {data[0].name}
          </h2>
          <p className="py-1 font-bold"> City: {data[0].address.city}</p>
          <address>
            <p className="font-bold">
              Street: <span>{data[0].address.street}</span>
            </p>
            <p className="font-bold">
              Suite: <span>{data[0].address.suite}</span>
            </p>
            <p className="font-bold">
              Zip Code: <span>{data[0].address.zipcode}</span>
            </p>
          </address>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
