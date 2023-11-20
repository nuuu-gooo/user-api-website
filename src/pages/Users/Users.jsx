import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { UsersComp } from "./UsersCmp/UsersComp";
import axios from "axios";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      let fetchData = await axios.get(
        `https://dummyjson.com/users/search?q=${searchVal}`
      );
      setUsers(fetchData.data.users);
    } catch (error) {
      setErrorMess(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <h1 className="text-center font-sans"> Loading.....</h1>;
  } else if (errorMess) {
    return (
      <>
        <h1 className="text-center font-sans">
          {" "}
          Following Error has occuired:{" "}
          <span className="text-[red]">{errorMess.message}</span>
        </h1>
      </>
    );
  }

  return (
    <>
      <div className="input-and-btn spacer flex">
        <input
          type="text"
          className="w-full p-4 outline-none"
          placeholder="Search...."
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button onClick={() => getData()} className="text-lg p-4">
          <FaSearch />
        </button>
      </div>
      <div className="products-wrapper">
        <div className="products-container spacer">
          <h1 className="font-sans text-center sm:text-start">All Users:</h1>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 w-full ">
            {users.length == 0 ? (
              <h1>User Not Found</h1>
            ) : (
              users.map((el) => <UsersComp users={el} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};
