import React from "react";

import { CHANNEL } from "../../../constants/channelTypes";
import { useChannels } from "../../../context/Channels";
import {
  MESSAGE_DELETE_CHANNEL,
  CHANNEL_DELETE,
} from "../../../constants/actionTypes";
import { useMessages } from "../../../context/Messages";
import AddChannel from "../../AddChannel";

const Channels = ({ handleChangeChannel }) => {
  const [channels, dispatch] = useChannels();
  const [, messagesDispatch] = useMessages();

  const channelList = Object.values(channels.channels).filter(
    ({ type }) => type === CHANNEL
  );

  const handleDeleteChannel = (event, id) => {
    event.stopPropagation();

    dispatch({
      type: CHANNEL_DELETE,
      payload: { id },
    });

    messagesDispatch({
      type: MESSAGE_DELETE_CHANNEL,
      payload: { id },
    });
  };

  return (
    <section>
      <h3>
        Channels <AddChannel />
      </h3>
      <ul>
        {channelList.map(({ id, name }) => (
          <li onClick={() => handleChangeChannel(id)} key={id}>
            {name}
            <button onClick={(event) => handleDeleteChannel(event, id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Channels;
