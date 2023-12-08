function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-1/4 p-4 hidden md:block">
      <h2 className="text-2xl font-semibold mb-4">Chats</h2>
      {/* <!-- List of chats --> */}
      <ul>
        <li className="py-2 hover:bg-gray-700 cursor-pointer">Chat 1</li>
        <li className="py-2 hover:bg-gray-700 cursor-pointer">Sofek</li>
        {/* <!-- Add more chats as needed --> */}
      </ul>
    </div>
  );
}

export default Sidebar;
