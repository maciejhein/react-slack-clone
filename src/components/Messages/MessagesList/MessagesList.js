import React, { useState } from "react";

import { MESSAGE_DELETE } from "../../../constants/actionTypes";
import { useMessages } from "../../../context/Messages";
import { useChannels } from "../../../context/Channels";
import EditMessage from "../EditMessage";

const MessagesList = () => {
  const [message, dispatch] = useMessages();
  const [channels] = useChannels();
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDeleteMessage = (id) => {
    dispatch({
      type: MESSAGE_DELETE,
      payload: {
        channelId: channels.selectedChannelId,
        id,
      },
    });
  };

  const handleEditMessage = () => setEditModalOpen(true);

  const handleEditModalClose = () => setEditModalOpen(false);

  if (!message[channels.selectedChannelId]) {
    return <div>Messages doesn't exist</div>;
  }

  return Object.values(message[channels.selectedChannelId]).map(
    ({ userName, message, id }) => (
      <li key={id}>
        {userName} - {message}
        <button onClick={handleEditMessage}>Edit</button>
        <button onClick={() => handleDeleteMessage(id)}>Delete</button>
        {isEditModalOpen && (
          <EditMessage
            onClose={handleEditModalClose}
            channelId={channels.selectedChannelId}
            id={id}
            message={message}
          />
        )}
      </li>
    )
  );
};

export default MessagesList;
