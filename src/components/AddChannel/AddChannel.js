import React, { useState } from "react";

import AddChannelModal from "./AddChannelModal";

const AddChannel = () => {
  const [isAddChannelModalOpen, setAddChannelModalOpen] = useState(false);

  const handleAddChannel = () => {
    setAddChannelModalOpen(true);
  };

  const handleCloseAddChannelModal = () => {
    setAddChannelModalOpen(false);
  };

  return (
    <>
      <button onClick={handleAddChannel}>Add</button>
      {isAddChannelModalOpen && (
        <AddChannelModal onClose={handleCloseAddChannelModal} />
      )}
    </>
  );
};

export default AddChannel;
