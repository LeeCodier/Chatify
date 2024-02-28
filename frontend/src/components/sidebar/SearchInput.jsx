import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered  rounded-full bg-cgray  placeholder:text-white"
      />
      <button
        type="submit"
        className="btn btn-circle  bg-cblue text-white hover:bg-cblue hover:opacity-75"
      >
        <IoSearchSharp className="h-6 w-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
