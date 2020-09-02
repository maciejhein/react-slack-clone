import React from 'react';

import { useChannels } from '../../../context/Channels';
import { ONE_ON_ONE_CONVERSATION } from '../../../constants/channelTypes';

const UserChannels = ( { handleChangeChannel }) => {
    const [channels] = useChannels();

    const userschannels = Object.values(channels.channels).filter(({ type }) => type === ONE_ON_ONE_CONVERSATION);

    return <>
        Users
        <ul>
            {
               userschannels.map(({ id, name }) => 
                <li onClick={() => handleChangeChannel(id)} key={id}>{name}</li>)
            }
        </ul>
    </>
}

export default UserChannels;