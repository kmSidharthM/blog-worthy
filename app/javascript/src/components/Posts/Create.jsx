import React, { useState } from "react";

import { Pane, Button, Typography, Input } from "@bigbinary/neetoui";

import { getFromLocalStorage } from "components/utils/storage";

import postApi from "../../apis/posts";

const Create = ({ isPaneOpen, updatePane }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPost = async () => {
    const post_owner_id = getFromLocalStorage("authUserId");
    try {
      await postApi.create({ post: { title, description, post_owner_id } });
      updatePane(false);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Pane className="p-6" isOpen={isPaneOpen} onClose={() => updatePane(false)}>
      <Typography className="mb-6" style="h2" weight="semibold">
        Create new post
      </Typography>
      <div className="flex w-full flex-col space-y-6">
        <Input
          required
          label="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          required
          label="Description"
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className=" mt-6 flex items-center space-x-2">
        <Button
          className="rounded bg-purple-600 p-2 text-white"
          label="Continue"
          onClick={createPost}
        />
        <Button
          label="Cancel"
          style="tertiary"
          onClick={() => updatePane(false)}
        />
      </div>
    </Pane>
  );
};

export default Create;
