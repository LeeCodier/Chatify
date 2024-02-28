import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="bg-ngray mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-cgray text-center text-3xl font-semibold">
          Sign Up <span className="text-cblue"> Chatify</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered h-10  w-full"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="label-text text-base text-white ">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base text-white ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base text-white ">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <GenderCheckbox />

          <a
            className="mt-2 inline-block text-sm text-white hover:text-blue-600 hover:underline"
            href="#"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm hover:text-cblue  mt-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;