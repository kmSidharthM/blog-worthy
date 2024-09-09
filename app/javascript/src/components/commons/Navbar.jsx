import React from "react";

import { Button } from "@bigbinary/neetoui";

const Navbar = ({ title }) => (
  <div className="sticky flex justify-between p-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <Button
      className="rounded bg-purple-600 px-2 py-1 text-white"
      label="Create new post"
    />
  </div>
);

export default Navbar;
