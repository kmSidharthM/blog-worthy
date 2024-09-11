import React, { useEffect, useState } from "react";

import { Button, Modal, Typography } from "@bigbinary/neetoui";

import postApi from "../../apis/posts";

const Show = ({ isModalOpen, updateModal, slug }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    showPost(slug);
  }, []);

  const showPost = async slug => {
    try {
      const {
        data: { post },
      } = await postApi.show(slug);
      setPost(post);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Modal
      className="flex flex-col space-y-4 p-4"
      isOpen={isModalOpen}
      onClose={() => updateModal(false)}
    >
      <div description="Short description">
        <Typography
          className="font-semibold text-purple-600"
          id="dialog1Title"
          style="h2"
        >
          {post.title}
        </Typography>
        <Typography className="mb-4 text-gray-500" style="h5">
          By {post.post_owner_name}
        </Typography>
      </div>
      <div className="space-y-2">
        <Typography lineHeight="normal" style="body2">
          {post.description}
        </Typography>
      </div>
      <div className="self-end pb-2 pr-2">
        <Button
          label="Cancel"
          style="tertiary"
          onClick={() => updateModal(false)}
        />
      </div>
    </Modal>
  );
};

export default Show;
