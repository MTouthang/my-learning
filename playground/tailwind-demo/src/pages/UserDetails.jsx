import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  console.log(userId);
  return (
    <>
      <h1>UserDetails</h1>
      <p> user ID - {userId}</p>
    </>
  );
};

export default UserDetails;
