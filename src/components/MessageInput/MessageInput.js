import React from 'react';
import { useFormik } from 'formik';

import { useChannels } from '../../context/Channels';
import { useMessages } from '../../context/Messages';
import { MESSAGE_ADD } from '../../constants/actionTypes';

const initialValues = {
    message: ''
}

const MessageInput = () => {
    const [channels] = useChannels();
    const [, dispatch] = useMessages();

    const onSubmit = (values) => {
        const id = Math.floor((1 + Math.random()) * 0x10000);

        const message = {
            id,
            avatar: '',
            userName: 'John Boezman',
            timestamp: '',
            message: values.message
        };

        dispatch({ type: MESSAGE_ADD, payload: {
            message,
            channelId: channels.selectedChannelId
        }})
    } 
    
    
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues,
        onSubmit,
    });

    return <form onSubmit={handleSubmit}>
            <input
                id="message"
                name="message"
                type="text"
                onChange={handleChange}
                value={values.message}
            />
            <button type="submit">Submit</button>
  </form>
}

export default MessageInput;