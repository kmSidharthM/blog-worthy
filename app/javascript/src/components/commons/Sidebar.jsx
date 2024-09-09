import React from "react";

import { Typography } from "@bigbinary/neetoui";

const Sidebar = () => (
  <div className="fixed left-0 top-0 flex h-full w-32 flex-col items-center justify-between border-r-2 py-8">
    <Typography style="h2">Logo</Typography>
    <Typography style="h2">Profile</Typography>
  </div>
);

export default Sidebar;
