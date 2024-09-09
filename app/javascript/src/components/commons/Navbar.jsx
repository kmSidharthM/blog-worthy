import React from "react";

import { Button } from "@bigbinary/neetoui";

import Create from "../Posts/Create";

const Navbar = ({ title, isPaneOpen, updatePane }) => (
  <div className="sticky top-0 flex justify-between bg-white p-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <Button
      className="rounded bg-purple-600 p-2 text-white"
      label="Create new post"
      onClick={() => updatePane(true)}
    />
    <Create {...{ isPaneOpen, updatePane }} />
  </div>
);

export default Navbar;
