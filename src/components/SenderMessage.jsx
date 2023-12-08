"use client";
export function SenderMessage({ message }) {
  return (
    <div className="mb-4 flex justify-end">
      <div className="max-w-xs bg-blue-500 p-3 rounded-lg">
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
}
