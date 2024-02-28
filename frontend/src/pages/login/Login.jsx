import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-ngray mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-cgray text-center text-3xl font-semibold">
          Login
          <span className="text-cblue"> Chatify</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered h-10 w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered h-10 w-full"
            />
          </div>
          <a
            href="#"
            className="hover:text-cblue mt-2 inline-block text-sm text-white hover:underline"
          >
            Don't have an account?
          </a>

          <div>
            <button className="btn  btn-block btn-sm hover:text-cblue  mt-2 ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
