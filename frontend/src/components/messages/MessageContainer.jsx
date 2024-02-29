import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts) //when the component is no longer in the browser
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex grow flex-col bg-dgray">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="mb-2 flex h-16 items-center bg-lgray px-4 font-bold text-gray-200 ">
            <span className="label-text font-bold text-white">To: </span>
            {"  "}
            <span className="">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 px-4 text-center font-semibold text-gray-200">
        <p>Welcome {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-center text-6xl" />
      </div>
    </div>
  );
};
