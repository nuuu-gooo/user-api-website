import { IoIosClose } from "react-icons/io";
import { useContext } from "react";
import { BackgroundContext } from "../BgContext/BgContext";

export const PopUp = (props) => {
  const { children, onClose, visible } = props;
  const { darkMode } = useContext(BackgroundContext);

  if (!visible) {
    return <></>;
  }
  return (
    <div className="wrapper">
      <div className="modal-styles">
        <div className="modal-container"></div>
        <p className={`${darkMode ? "text-black font-sans" : "font-sans"}`}>
          {children}
        </p>
        <button
          onClick={onClose}
          className=" text-3xl rounded  absolute left-[90%] bottom-[50%] flex justify-center align-middle text-white bg-[red] border-solid border-black hover:opacity-70 cursor-pointer"
        >
          <IoIosClose />
        </button>
      </div>
    </div>
  );
};
