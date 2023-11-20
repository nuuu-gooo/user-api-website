import { IoIosClose } from "react-icons/io";

export const NavModal = (props) => {
  const { children, visibility, onClose } = props;

  if (!visibility) {
    return <></>;
  }

  return (
    <div className="nav-modal-wrapper sm:hidden mt-10 absolute right-9 top-6  bg-[#9f9797] p-10 rounded  text-red-500 align-middle ">
      <div className=" flex flex-col align-middle  text-center justify-center">
        {children}
        <button
          className=" border-none flex align-middle bg-transparent text-3xl cursor-pointer p-1 absolute top-2 right-3"
          onClick={onClose}
        >
          <IoIosClose />
        </button>
      </div>
    </div>
  );
};
