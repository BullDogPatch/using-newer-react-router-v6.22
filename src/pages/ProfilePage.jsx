import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchUserByUsername } from "../utils/utils";
import maleImage from "../assets/malepic.png";
import femaleImage from "../assets/femalepic.png";

console.log(maleImage);

const ProfilePage = () => {
  const { username } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["username", username],
    queryFn: () => fetchUserByUsername(username),
  });
  // console.log(data[0].name);
  const imageArray = [maleImage, femaleImage];
  let number = Math.floor(Math.random() * imageArray.length) + 1;
  console.log(number);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <img src={number} alt="avatar" style={{ width: "500px" }} />
      {<h2 className="text-2xl text-slate-200">{data[0].name}</h2>}
      {<p>{data[0].address.city}</p>}
    </>
  );
};

export default ProfilePage;
