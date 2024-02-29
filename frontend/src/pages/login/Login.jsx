import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center bg-ngray">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-cgray">
          Login
          <span className="text-cblue"> Chatify</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered h-10 w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="mt-2 inline-block text-sm text-white hover:text-cblue hover:underline"
          >
            Don't have an account?
          </Link>

          <div>
            <button
              className="btn  btn-sm btn-block mt-2  hover:text-cblue  "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-cblue"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
