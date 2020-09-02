import {
  CHANNEL_SET_CURRENT,
  CHANNEL_ADD,
  CHANNEL_DELETE,
} from "../../constants/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANNEL_SET_CURRENT:
      return {
        ...state,
        selectedChannelId: action.payload.id,
      };
    case CHANNEL_ADD:
      return {
        ...state,
        channels: {
          ...state.channels,
          [action.payload.id]: action.payload,
        },
        selectedChannelId: action.payload.id,
      };
    case CHANNEL_DELETE:
      const { [action.payload.id]: omit, ...channels } = state.channels;

      return {
        ...state,
        channels,
      };
    default:
      return state;
  }
};

export default reducer;
