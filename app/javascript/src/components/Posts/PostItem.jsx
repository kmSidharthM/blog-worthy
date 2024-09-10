import React, { useState } from "react";

import { Typography } from "@bigbinary/neetoui";

import Show from "./Show";

const PostItem = ({ title, description, post_owner }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateModal = value => {
    setIsModalOpen(value);
  };

  return (
    <div>
      <div
        className="m-2 rounded border-2 bg-purple-50 p-8 text-white"
        onClick={() => setIsModalOpen(true)}
      >
        <Typography className="mb-2 font-semibold text-purple-600" style="h3">
          {title}
        </Typography>
        <Typography className="mb-4 ml-2 text-gray-500" style="h5">
          Created by {post_owner}
        </Typography>
        <hr className="border-black" />
        <Typography className="overflow-hidden text-ellipsis pt-4 text-black">
          {description}
        </Typography>
      </div>
      <Show {...{ title, description, isModalOpen, updateModal, post_owner }} />
    </div>
  );
};
export default PostItem;
