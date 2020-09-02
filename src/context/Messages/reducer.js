import { MESSAGE_ADD, MESSAGE_DELETE, MESSAGE_EDIT, MESSAGE_DELETE_CHANNEL } from "../../constants/actionTypes";

const reducer = (state, action) => {
    switch (action.type) {
        case MESSAGE_ADD:
            return {
                ...state,
                [action.payload.channelId]: {
                    ...state[action.payload.channelId],
                    [action.payload.message.id]: action.payload.message
                }
            }
        case MESSAGE_DELETE: 
            const {[action.payload.id]: omit, ...messages } = state[action.payload.channelId]; 
            
            return {
                ...state,
                [action.payload.channelId]: {
                    ...messages,
                }
            }
        case MESSAGE_EDIT: 
            return {
                ...state,
                [action.payload.channelId]: {
                    ...state[action.payload.channelId],
                    [action.payload.id]: {
                        ...state[action.payload.channelId][action.payload.id],
                        message: action.payload.message,
                    }
                }
            }
        case MESSAGE_DELETE_CHANNEL: 
            const {[action.payload.id]: omitChannelMessages, ...ChannelMessages } = state;

            return {
                ...ChannelMessages
            }
      default:
        return state;
    }
};

export default reducer;