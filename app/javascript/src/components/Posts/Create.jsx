import React, { useState } from "react";

import { Pane, Button, Typography, Input } from "@bigbinary/neetoui";

import postApi from "../../apis/posts";

const Create = ({ isPaneOpen, updatePane }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPost = async () => {
    try {
      await postApi.create({ post: { title, description } });
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
        <Button label="Continue" onClick={createPost} />
        <Button label="Cancel" style="text" onClick={() => updatePane(false)} />
      </div>
    </Pane>
  );
};

export default Create;
