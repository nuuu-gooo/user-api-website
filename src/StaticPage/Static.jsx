import { Outlet, useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { NavModal } from "../pages/NavModal/NavModal";
import { Footer } from "../pages/Footer/Footer";
import { FaHamburger } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { BackgroundContext } from "../pages/BgContext/BgContext";

export const StaticPage = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [navModal, setNavModal] = useState(false);
  const { darkMode, setDarkMode } = useContext(BackgroundContext);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  if (darkMode) {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "unset";
    document.body.style.color = "unset";
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <div className="nav-wrapper font-sans ">
        <div className="  nav-container spacer flex justify-between items-center px-[10]">
          <button
            onClick={toggleDarkMode}
            className="bg-transparent cursor-pointer text-1xl  flex  justify-center  align-middle border-none  left-5 fixed hover:text-[red] "
          >
            {darkMode ? (
              <IoMdSunny
                className={`${
                  darkMode
                    ? "text-white justify-center text-3xl align-middle rounded-full border-white  hover:text-[red]"
                    : ""
                }`}
              />
            ) : (
              <FaMoon className=" text-3xl" />
            )}
          </button>
          <h1>DevConnect</h1>
          <button
            onClick={() => setNavModal(true)}
            className="sm:hidden text-4xl flex justify-center align-center bg-[transparent] border-none cursor-pointer"
          >
            <FaHamburger className={`${darkMode ? "text-white" : ""}`} />
          </button>
          <NavModal onClose={() => setNavModal(false)} visibility={navModal}>
            <Link to={"./users"}>Products</Link>
            <Link to={"./"}>Main</Link>
            <Link to={"./socialmedia"}>Socials</Link>
          </NavModal>
          <div className="links hidden sm:block ">
            <button
              className="mr-[30px]  general-btn"
              onClick={() => navigate("/")}
            >
              About
            </button>
            <button
              className="mr-[30px] general-btn"
              onClick={() => navigate("/users")}
            >
              Users
            </button>
            <button
              className=" general-btn"
              onClick={() => navigate("/socialmedia")}
            >
              Social Media
            </button>
          </div>
        </div>
      </div>
      <div className="input-and-btn flex justify-center spacer"></div>
      {console.log(searchInput)}
      <Outlet />
      <Footer />
    </>
  );
};
