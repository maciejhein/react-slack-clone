import React from 'react';

import { useChannels } from '../../context/Channels/ChannelsCfg';
import { CHANNEL_SET_CURRENT } from '../../constants/actionTypes';
import Channels from './Channels';
import UserChannels from './UserChannels';

const SideBar = () => {
    const [,dispatch] = useChannels();

    const handleChangeChannel = (id) => {
        dispatch({
            type: CHANNEL_SET_CURRENT,
            payload: {
                id,
            }
        });
    }
    
    return <nav className="side-bar">
        <div>
            <Channels handleChangeChannel={handleChangeChannel}/>
            <UserChannels handleChangeChannel={handleChangeChannel} />
        </div>
    </nav>
}

export default SideBar;