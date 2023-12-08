import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full">
      <div className="flex h-screen">
        <Sidebar />
        <ChatWindow />
      </div>
    </main>
  );
}
