import React from 'react';
import { useFormik } from 'formik';

import Modal from '../../Modal';
import { useMessages } from '../../../context/Messages';
import { MESSAGE_EDIT } from '../../../constants/actionTypes';

const EditMessage = ({ id, message, channelId, onClose }) => {
    const [, dispatch] = useMessages();
    const initialValues = {
        message
    };

    const onSubmit = (values) => {
        dispatch({
            type: MESSAGE_EDIT,
            payload: {
                id,
                message: values.message,
                channelId
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
                id="message"
                name="message"
                type="text"
                onChange={handleChange}
                value={values.message}
            />
            <button type="submit">Submit</button>
        </form>
    </Modal>
}

export default EditMessage;