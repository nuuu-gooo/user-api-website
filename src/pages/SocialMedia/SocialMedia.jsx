import { AiFillInstagram } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BackgroundContext } from "../BgContext/BgContext";
export const SocialMedia = () => {
  const { darkMode } = useContext(BackgroundContext);
  return (
    <div className="general">
      <h1 className="text-center font-sans">Socials: </h1>
      <div className="flex justify-center align-middle">
        <Link
          mode
          className={`${darkMode ? "text-white" : "text-black"}`}
          to={"https://www.linkedin.com/in/nugzar-nugo-marjanidze-76616228b/"}
        >
          <SiLinkedin />
        </Link>
        <Link
          className={`${darkMode ? "text-white" : "text-black"}`}
          to={"https://github.com/nuuu-gooo"}
        >
          <VscGithub />
        </Link>
      </div>
    </div>
  );
};
