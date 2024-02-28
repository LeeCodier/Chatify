import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="mt-3 bg-ngray p-4">
      <div className="relative flex w-full gap-4 ">
        <input
          type="text"
          className=" flex h-[30px] grow flex-row rounded-full border border-gray-600 bg-cgray p-1 px-4 text-sm text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="  flex h-[30px] w-[30px] items-center justify-center rounded-full bg-cblue text-white hover:opacity-70"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
