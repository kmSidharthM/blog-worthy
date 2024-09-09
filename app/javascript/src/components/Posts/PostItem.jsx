import React from "react";

import { Typography } from "@bigbinary/neetoui";

const PostItem = ({ title, description }) => (
  <div className="m-2 rounded border-2 bg-purple-50 p-8 text-white">
    <Typography className="mb-4 font-semibold text-purple-600" style="h3">
      {title}
    </Typography>
    <hr className="border-black" />
    <Typography className="overflow-hidden text-ellipsis pt-4 text-black">
      {description}
    </Typography>
  </div>
);
export default PostItem;
