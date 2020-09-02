import React from "react";

import SideBar from "../SideBar";
import Messages from "../Messages";
import MessageInput from "../MessageInput";
import { ChannelsProvider } from "../../context/Channels";
import { MessagesProvider } from "../../context/Messages";

function App() {
  return (
    <div className="app">
      <ChannelsProvider>
        <MessagesProvider>
          <SideBar />
          <main>
            <Messages />
            <MessageInput />
          </main>
        </MessagesProvider>
      </ChannelsProvider>
    </div>
  );
}

export default App;
