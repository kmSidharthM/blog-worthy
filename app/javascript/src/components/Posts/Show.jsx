import React from "react";

import { Button, Modal, Typography } from "@bigbinary/neetoui";

const Show = ({ isModalOpen, updateModal, title, description }) => (
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
        {title}
      </Typography>
    </div>
    <div className="space-y-2">
      <Typography lineHeight="normal" style="body2">
        {description}
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

export default Show;
