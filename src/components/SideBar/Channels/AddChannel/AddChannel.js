import React from 'react';
import { useFormik } from 'formik';

import { useChannels } from '../../../../context/Channels';
import { CHANNEL_ADD } from '../../../../constants/actionTypes';
import { CHANNEL } from '../../../../constants/channelTypes';
import Modal from '../../../Modal';

const initialValues = {
    name: ''
};

const AddChannel = ({onClose}) => {
    const [, dispatch] = useChannels();

    const onSubmit = (values) => {
        const id = Math.floor((1 + Math.random()) * 0x10000);


        dispatch({
            type: CHANNEL_ADD,
            payload: {
                id,
                name: values.name,
                type: CHANNEL
            }
        });
        
        onClose();
    };

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues,
        onSubmit,
    });

    return <Modal>
        <form onSubmit={handleSubmit}>
            <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
            />
            <button type="submit">Submit</button>
        </form>
    </Modal>
}

export default AddChannel;