import React from "react";

const PostItem = ({ title, description }) => (
  <div className="m-2 rounded bg-neutral-800 p-8 text-white">
    <h1 className="mb-4 font-semibold">{title}</h1>
    <hr className="border-black" />
    <p className="overflow-hidden text-ellipsis pt-4">{description}</p>
  </div>
);
export default PostItem;
