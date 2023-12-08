"use client";
export function ReceiverMessage({ message }) {
  return (
    <div className="mb-4 flex">
      <div className="max-w-xs bg-gray-300 p-3 rounded-lg">
        <p>{message}</p>
      </div>
    </div>
  );
}
