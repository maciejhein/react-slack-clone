import React, { createContext, useReducer, useContext } from "react";

import reducer from './reducer';
import defaultState from "./defaultState";

const ChannelsContext = createContext(defaultState);

export const useChannels = () => useContext(ChannelsContext);

export const ChannelsProvider = ({children}) =>(
    <ChannelsContext.Provider value={useReducer(reducer, defaultState)}>
      {children}
    </ChannelsContext.Provider>
  );
