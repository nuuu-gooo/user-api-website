import { TbApi } from "react-icons/tb";
import { PopUp } from "../PopUp/PopUp";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { BackgroundContext } from "../BgContext/BgContext";
const About = () => {
  const [visible, setVisible] = useState(false);
  const { darkMode } = useContext(BackgroundContext);
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`${
          darkMode
            ? "flex justify-center flex-col align-middle spacer w-full bg-[transparent] border-white border-solid p-10 rounded"
            : "flex justify-center flex-col align-middle spacer w-full bg-[transparent] border-black border-solid p-10 rounded"
        }`}
      >
        <div>
          <p className="title text-center font-sans">Welcome 😁</p>
        </div>

        <div className="sm:flex justify-center align-middle">
          <div className="  sm:flex-col align-middle text-center">
            <h1 className="font-sans"> This site is all About API's </h1>
            <p className="font-sans text-xs text-center w-full">
              API, which stands for Application Programming Interface, is a set{" "}
              <br />
              of rules and tools that allows different software applications to{" "}
              <br />
              communicate with each other. It defines the methods and data{" "}
              <br />
              formats that applications can use to request and exchange <br />
              information. APIs play a crucial role in modern software <br />
              development by enabling the integration of different services and{" "}
              <br />
              systems.
            </p>
          </div>
        </div>
        <div className="btn flex justify-center ">
          <button
            onClick={() => setVisible(true)}
            className={`${
              darkMode
                ? "bg-transparent text-white p-6 border-solid border-white mt-10 rounded cursor-pointer"
                : "bg-black text-white p-6  border-white mt-10 rounded cursor-pointer"
            }`}
          >
            Click Here For Magic{" "}
          </button>
          <PopUp onClose={() => setVisible(false)} visible={visible}>
            Go to "Users" to see even more exciting things 👨🏻‍💻
          </PopUp>
        </div>
      </div>
    </div>
  );
};

export default About;

//
