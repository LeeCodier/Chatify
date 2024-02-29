import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="mt-3 bg-ngray p-4" onSubmit={handleSubmit}>
      <div className="relative flex w-full gap-4 ">
        <input
          type="text"
          className=" flex h-[30px] grow flex-row rounded-full border border-gray-600 bg-cgray p-1 px-4 text-sm text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="  flex h-[30px] w-[30px] items-center justify-center rounded-full bg-cblue text-white hover:opacity-70"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
