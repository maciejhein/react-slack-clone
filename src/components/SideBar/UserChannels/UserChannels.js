import React from "react";

import { useChannels } from "../../../context/Channels";
import { ONE_ON_ONE_CONVERSATION } from "../../../constants/channelTypes";

const UserChannels = ({ handleChangeChannel }) => {
  const [channels] = useChannels();

  const userschannels = Object.values(channels.channels).filter(
    ({ type }) => type === ONE_ON_ONE_CONVERSATION
  );

  return (
    <section>
      <h3>Users</h3>
      <ul>
        {userschannels.map(({ id, name }) => (
          <li onClick={() => handleChangeChannel(id)} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserChannels;
