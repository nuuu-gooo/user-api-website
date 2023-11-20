import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FcInfo, FcLike } from "react-icons/fc";
export const UsersComp = (props) => {
  const { users } = props;
  const [dataApi2, setDataApi2] = useState([]);
  // const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  //-----------SECOND "LIKES" API CALL-----------------//
  const getDataApi2 = async () => {
    try {
      setLoading(true);
      let fetchData = await axios.get(
        ` https://dummyjson.com/posts/user/${users.id}`
      );
      setDataApi2(fetchData.data.posts[0].reactions);
    } catch (error) {
      // setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDataApi2();
  }, []);

  if (loading) {
    return (
      <>
        <h1 className="font-sans text-center">Loading.....</h1>
      </>
    );
  }
  console.log(dataApi2);
  return (
    <div key={users.id}>
      <div className="user sm:w-full flex overflow-hidden rounded items-center flex-col justify-center border-solid   border-l-black">
        <img className="rounded-full " src={users.image} alt="" />
        <p className="font-sans">{users.firstName}</p>
        <p className="font-sans">Age: {users.age}</p>
        <div className="  flex  sm:flex justify-center align-middle">
          <FcLike onClick={() => setDataApi2(dataApi2 + 1)} />
          <p>{dataApi2}</p>
        </div>
        <Link className="text-3xl" to={` ${users.id}`}>
          <FcInfo />
        </Link>
      </div>
    </div>
  );
};
