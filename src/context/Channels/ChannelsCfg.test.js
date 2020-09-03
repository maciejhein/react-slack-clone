import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { ChannelsProvider, useChannels } from './ChannelsCfg';

describe('channelsCfg', () => {
  test('should return default state with dispatch function', () => {
    const { result } = renderHook(() => useChannels(), {
      wrapper: (props) => <ChannelsProvider {...props} />,
    });

    const [channels, dispatch] = result.current;

    expect(channels.channels[1].type).toBe('CHANNEL');
    expect(typeof dispatch).toBe('function');
  });
});