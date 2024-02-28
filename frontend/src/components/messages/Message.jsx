import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>
      </div>

      <div className={`chat-bubble bg-cblue text-white`}> test</div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50">
        12:00
      </div>
    </div>
  );
};

export default Message;
