import React, { useState } from 'react';

import { CHANNEL } from '../../../constants/channelTypes';
import { useChannels } from '../../../context/Channels';
import { MESSAGE_DELETE_CHANNEL, CHANNEL_DELETE } from '../../../constants/actionTypes';
import { useMessages } from '../../../context/Messages';
import AddChannel from './AddChannel';

const Channels = ({ handleChangeChannel }) => {
    const [channels, dispatch] = useChannels();
    const [, messagesDispatch] = useMessages();
    const [isAddChannelModalOpen, setAddChannelModalOpen] = useState(false);


    const channelList = Object.values(channels.channels).filter(({ type }) => type === CHANNEL);


    const handleDeleteChannel = (e, id) => {
        e.stopPropagation(); 

        dispatch({
            type: CHANNEL_DELETE,
            payload: {id}
        })
        
        messagesDispatch( {
            type: MESSAGE_DELETE_CHANNEL,
            payload: { id}
        })
    };

    const handleAddChannel = () => {
        setAddChannelModalOpen(true);
    }

    const handleCloseAddChannelModal = () => {
        setAddChannelModalOpen(false);
    }

    return <>
        <div>
            Channels <button onClick={handleAddChannel}>Add</button>
        </div>
        <ul>
            {
               channelList.map(({ id, name }) => 
                <li onClick={() => handleChangeChannel(id)} key={id}>{name} <button onClick={(e) => handleDeleteChannel(e,id)}>delete</button></li>)
            }
        </ul>
        {isAddChannelModalOpen && <AddChannel onClose={handleCloseAddChannelModal}/>}
    </> 

}

export default Channels;