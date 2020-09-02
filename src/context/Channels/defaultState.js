import { CHANNEL, ONE_ON_ONE_CONVERSATION } from "../../constants/channelTypes";

const defaultState = {
    channels: {
        1: {
            id: 1,
            name: 'general',
            type: CHANNEL
        },
        2: {
            id: 2,
            name: 'random',
            type: CHANNEL
        },
        3: {
          id: 3,
          name: 'John Lidaka',
          type: ONE_ON_ONE_CONVERSATION
      }
    },
    selectedChannelId: 1,
};

export default defaultState;