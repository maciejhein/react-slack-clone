import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { MessagesProvider, useMessages } from './MessagesCfg';

describe('MessagesCfg', () => {
  test('should return default state with dispatch function', () => {
    const { result } = renderHook(() => useMessages(), {
      wrapper: (props) => <MessagesProvider {...props} />,
    });

    const [channels, dispatch] = result.current;

    expect(channels[1][1].message).toBe('Hi');
    expect(typeof dispatch).toBe('function');
  });
});
