import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={` flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-cgray  
          ${isSelected ? "bg-cblue" : ""}

        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 h-[1px] bg-cgray py-0" />}
    </>
  );
};
export default Conversation;
