import React from 'react';

import { useChannels } from '../../context/Channels';
import { useMessages } from '../../context/Messages';
import MessagesList from './MessagesList';

const Messages = () => {
    const [channels] = useChannels();
    const [message] = useMessages();

    return <section>
        <ul>
            {
                message[channels.selectedChannelId] ? <MessagesList/> : <div>Channel wasn't selected</div>
            }
        </ul>
    </section>
};

export default Messages;