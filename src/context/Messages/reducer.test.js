import reducer from './reducer';

const defaultState = {
    1: {
        1: {
          id: 1,
          avatar: "",
          userName: "John Robinson",
          timestamp: "",
          message: "Hi",
        },
      },
      3: {
        1: {
          id: 1,
          avatar: "",
          userName: "John Lidaka",
          timestamp: "",
          message: "Hello",
        },
      },
}

describe('messages reducer', () => {
    test('returns the initial state', () => {
        expect(reducer(defaultState, {})).toEqual(defaultState);
    });

    test('handles action `MESSAGE_ADD`', () => {
        const message = {
            id: 2,
            avatar: "",
            userName: "John Boezman",
            timestamp: "",
            message: "Bye"
        };

        const action = {
            type: 'MESSAGE_ADD',
            payload: {
                channelId: 1,
                message
            }
        };

        const expectedState = {
            ...defaultState,
            1: {
                ...defaultState[1],
                2: message
            }
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });

    test('handles action `MESSAGE_DELETE`', () => {
        const action = {
            type: 'MESSAGE_DELETE',
            payload: {
                channelId: 1,
                id: 1
            }
        };

        const { 1: omit, ...messages } = defaultState[1];

        const expectedState = {
            ...defaultState,
            1: {
                ...messages
            }
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });

    test('handles action `MESSAGE_EDIT`', () => {
        const action = {
            type: 'MESSAGE_EDIT',
            payload: {
                channelId: 1,
                id: 1,
                message: 'Bye'
            }
        };

        const expectedState = {
            ...defaultState,
            1: {
              ...defaultState[1],
              1: {
                ...defaultState[1][1],
                message: 'Bye',
              }
            }
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });

    test('handles action `MESSAGE_DELETE_CHANNEL`', () => {
        const action = {
            type: 'MESSAGE_DELETE_CHANNEL',
            payload: {
                id: 1,
            }
        };

        const { 1: omit, ...channels } = defaultState;

        const expectedState = {
            ...channels
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });
});
