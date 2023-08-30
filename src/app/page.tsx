"use client"

import { Chat } from "./components/Chat";
import { UserProvider } from "./contexts/Usercontext";
import { ChatProvider } from "./contexts/chatContext";

const Page = (rating : string) => {

  
  return (

    <div className="container mx-auto m-w-lg px-2">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl my-3 text-center">talk2mi Chat</h1>

          <Chat/>
        </ChatProvider>
      </UserProvider>
    </div>
  );

}

export default Page;