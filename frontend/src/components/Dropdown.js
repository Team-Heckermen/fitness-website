import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = (props) => {
  return (
    <div
      className={
        props.isOpen
          ? "grid grid-rows-4 text-center items-center bg-blue-400"
          : "hidden"
      }
      onClick={props.toggle}
    >
      <Link className="p-1" to="/">
        Home
      </Link>
      <Link className="p-1" to="/discussion">
        Discussion
      </Link>
      <Link className="p-1" to="/settings">
        Settings
      </Link>
      <Link className="p-4" to="/profile">
        Profile
      </Link>
    </div>
  );
};
