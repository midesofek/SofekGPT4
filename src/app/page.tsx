import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full">
      <div className="flex h-screen">
        <Sidebar />

        {/* <!-- Chat Area --> */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* <!-- Chat Header --> */}
          <div className="flex-shrink-0 bg-white border-b-2 border-gray-200">
            <div className="flex items-center justify-between p-2">
              <h2 className="text-xl font-semibold">Chat 1</h2>
              {/* <!-- Add any header buttons or information here --> */}
            </div>
          </div>

          {/* <!-- Messages --> */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* <!-- Sender's message --> */}
            <div className="mb-4 flex justify-end">
              <div className="max-w-xs bg-blue-500 p-3 rounded-lg">
                <p className="text-white">Hello there!</p>
              </div>
            </div>

            {/* <!-- Receiver's message --> */}
            <div className="mb-4 flex">
              <div className="max-w-xs bg-gray-300 p-3 rounded-lg">
                <p>Hi! How can I help you?</p>
              </div>
            </div>

            {/* <!-- Add more messages as needed --> */}
          </div>

          {/* <!-- Message Input --> */}
          <div className="flex-shrink-0 bg-white border-t-2 border-gray-200 p-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-full p-2 focus:outline-none"
              />
              <button className="ml-2 bg-blue-500 text-white p-2 rounded-full">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
