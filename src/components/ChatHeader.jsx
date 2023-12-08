function ChatHeader() {
  return (
    <div className="flex-shrink-0 bg-white border-b-2 border-gray-200">
      <div className="flex items-center justify-between p-2">
        <div>
          <span>
            <h2 className="text-xl font-semibold">SofekGPT</h2>
          </span>
          <span>
            <h3 className="text font-extralight">Using GPT-4⚡️</h3>
          </span>
        </div>
        {/* <!-- Add any header buttons or information here --> */}
        <h2>From Your Favorite: MideSofek💙 </h2>
      </div>
    </div>
  );
}

export default ChatHeader;
