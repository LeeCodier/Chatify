import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  // const { loading, logout } = useLogout();

  return (
    <div className="">
      <BiLogOut
        className="h-6 w-6 cursor-pointer text-white"
        // onClick={logout}
      />
    </div>
  );
};
export default LogoutButton;

// <div className="">
//   {!loading ? (
//     <BiLogOut
//       className="h-6 w-6 cursor-pointer text-white"
//       // onClick={logout}
//     />
//   ) : (
//     <span className="loading loading-spinner"></span>
//   )}
// </div>;
