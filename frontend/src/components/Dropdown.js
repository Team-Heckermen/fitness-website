import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = (props) => {
  return (
    <div
      className={
        props.isOpen
          ? "text-center items-center"
          : "hidden"
      }
      onClick={props.toggle}
    >
      <div className="my-1.5 absolute w-full t-3 bg-white">
        <Link className="p-1" to="/">
          Home
        </Link>

        <hr className="my-1.5 w-90% mx-auto border-gray-500" />

        <Link className="p-1" to="/discussion">
          Discussion
        </Link>

        <hr className="my-1.5 w-90% mx-auto border-gray-500" />

        <Link className="p-1" to="/settings">
          Settings
        </Link>

        <hr className="my-1.5 w-90% mx-auto border-gray-500" />

        <Link className="p-4" to="/profile">
          Profile
        </Link>
        
        <hr className="mt-1.5 w-95% mx-auto border-gray-700" />
      </div>
    </div>
  );
};
