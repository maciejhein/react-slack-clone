import reducer from './reducer';

const defaultState = {
    channels: {
        1: {
          id: 1,
          name: "general",
          type: 'CHANNEL',
        },
        2: {
            id: 1,
            name: "random",
            type: 'CHANNEL',
        },
    },
    selectedChannelId: 1,
}

describe('channels reducer', () => {
    test('returns the initial state', () => {
        expect(reducer(defaultState, {})).toEqual(defaultState);
    });

    test('handles action `CHANNEL_SET_CURRENT`', () => {
        const action = {
            type: 'CHANNEL_SET_CURRENT',
            payload: {
                id: 2
            }
        };

        const expectedState = {
            ...defaultState,
            selectedChannelId: 2
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });

    test('handles action `CHANNEL_ADD`', () => {
        const channel = {
            id: 3,
            name: "John Wath",
            type: 'ONE_ON_ONE_CONVERSATION'
        }

        const action = {
            type: 'CHANNEL_ADD',
            payload: channel
        };

        const expectedState = {
            ...defaultState,
            channels: {
              ...defaultState.channels,
              [channel.id]: channel,  
            },
            selectedChannelId: 3
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });

    test('handles action `CHANNEL_DELETE`', () => {
        const action = {
            type: 'CHANNEL_DELETE',
            payload: {
                id: 2
            }
        };
        
        const {2: omit, ...channels } = defaultState.channels;

        const expectedState = {
            ...defaultState,
            channels
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);

    });
});
