import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //pass all user inputs into the signup function
    await signup(inputs);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center bg-ngray">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-cgray">
          Sign Up <span className="text-cblue"> Chatify</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered h-10  w-full"
              value={inputs.fullName}
              onChange={(e) =>
                //spread the inputs, but only add the fullname
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            className="mt-2 inline-block text-sm text-white hover:text-blue-600 hover:underline"
            to="/login"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-sm btn-block mt-2  hover:text-cblue"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-cblue"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
