import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-cblue" : "bg-lgray";

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>

      <div className={`chat-bubble  text-white ${bubbleBgColor} ${shakeClass}`}>
        {" "}
        {message.message}
      </div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50">
        {formattedTime}{" "}
      </div>
    </div>
  );
};

export default Message;
