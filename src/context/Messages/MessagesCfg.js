import React, { createContext, useReducer, useContext } from "react";

import reducer from "./reducer";
import defaultState from "./defaultState";

const MessagesContext = createContext(defaultState);

export const useMessages = () => useContext(MessagesContext);

export const MessagesProvider = ({ children }) => (
  <MessagesContext.Provider value={useReducer(reducer, defaultState)}>
    {children}
  </MessagesContext.Provider>
);
