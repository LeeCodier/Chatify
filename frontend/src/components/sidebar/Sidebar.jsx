import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex h-full w-fit flex-col border-r-2 border-cgray  text-white">
      <div className=" flex h-16 items-center justify-between bg-lgray px-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>
        <p className="font-bold text-gray-200"> Current John Doe</p>
        <LogoutButton />
      </div>

      <div className="flex w-fit grow flex-col  bg-ngray p-4 text-white">
        <div>
          <SearchInput />
        </div>

        <div className="divider px-3"></div>
        <Conversations />
      </div>
    </div>
  );
};
export default Sidebar;
