"use client";

import { useState } from "react";
import ChatHeader from "./ChatHeader";
import { SenderMessage } from "./SenderMessage";
import { ReceiverMessage } from "./ReceiverMessage";

function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* <!-- Chat Header --> */}
      <ChatHeader />

      {/* <!-- Messages --> */}
      <Messages />

      {/* <!-- Message Input --> */}
      {/* <MessageInput /> */}
    </div>
  );
}

function Messages() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey there👋🏼,\n This is your favorite Bot by your Favorite: 'Mide'! \nHow can I help you today?",
    },
  ]);

  const callGetResponse = async () => {
    try {
      setIsLoading(true);
      let temp = messages;
      temp.push({ role: "user", content: inputMessage });
      setMessages(temp);
      console.log("Calling OpenAI...");

      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ messages }),
      });
      console.log(response);
      const data = await response.json();
      const { output } = data;
      console.log("OpenAI replied...", output.content);

      setMessages((prevMessages) => [...prevMessages, output]);
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  function handleSendMessage(message) {
    if (!message.length) {
      alert("Please type in a message");
    }
    callGetResponse();
    console.log(message);
    setInputMessage("");
  }

  return (
    <>
      {/* <!-- Messages --> */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => {
          return msg.role === "assistant" ? (
            <ReceiverMessage message={msg.content} />
          ) : (
            <SenderMessage message={msg.content} />
          );
        })}
      </div>

      {/* <!-- Message Input --> */}
      <div className="flex-shrink-0 bg-white border-t-2 border-gray-200 p-2">
        <div className="flex items-center">
          <input
            type="text"
            placeholder={` ${
              isLoading ? "Thinking..." : "Type your message..."
            }`}
            value={inputMessage}
            disabled={isLoading}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 border rounded-full p-2 focus:outline-none"
          />
          <button
            className="ml-2 bg-blue-500 text-white p-2 rounded-full"
            onClick={() => handleSendMessage(inputMessage)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
