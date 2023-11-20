import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { PopUp } from "../PopUp/PopUp";

const SingleUser = (props) => {
  const [phone, setPhone] = useState(false);
  const [singleUser, setSingleUser] = useState([]);
  const { id } = useParams();

  async function getData(ident) {
    const withoutWhiteSpace = ident.trim();
    let fetchData = await axios.get(
      `https://dummyjson.com/users/${withoutWhiteSpace}`
    );

    setSingleUser(fetchData.data);
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  console.log(singleUser);

  return (
    <>
      <div className="single-user-wrapper">
        <div className="  flex w-[70%] justify-center items-center flex-col border-solid p-3 sm:w-[50%]">
          <img
            className="overflow-hidden"
            src={singleUser.image}
            alt="user-img"
          />
          <h1 className="font-sans">{singleUser.firstName}</h1>

          <button
            onClick={() => setPhone(true)}
            className="flex justify-center mb-3 p-3 w-full text-2xl"
          >
            <FaPhoneAlt />
          </button>

          <PopUp onClose={() => setPhone(false)} visible={phone}>
            {singleUser.phone}
          </PopUp>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
