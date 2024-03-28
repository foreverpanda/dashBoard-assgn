import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Profile() {
  return (
    <span className="flex hover:bg-indigo-900 bg-lightblue-rgba rounded-md p-2 items-center justify-between mb-2">
      <span className="flex gap-2  items-center">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbiUyMHBob3RvJTIwcG9ydHJhaXQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D"
          className="w-8 h-8 object-cover rounded-full"
        ></img>
        <span className="flex flex-col line text-white">
          <p className="text-sm font-semibold leading-0">Evans</p>
          <p className="text-xs font-light">Project Manager</p>
        </span>
      </span>
      <IoIosArrowDown className="text-white"/>
    </span>
  );
}

export default Profile;
