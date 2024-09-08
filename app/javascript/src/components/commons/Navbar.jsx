import React from "react";

const Navbar = ({ title }) => (
  <div className="sticky flex justify-between p-6">
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    <button className="rounded bg-yellow-400 px-2 py-1">Create new post</button>
  </div>
);

export default Navbar;
