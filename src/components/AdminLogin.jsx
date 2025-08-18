import axios from "axios";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { VscLoading } from "react-icons/vsc";

export default function AdminLogin({ onSubmit, errorMessage, loading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white/20 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
      {errorMessage && (
        <h1 className="text-orange-400 font-medium mb-4">{errorMessage}</h1>
      )}
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleLogin(e)}
          className="w-full bg-blue-500 text-white font-medium text-lg p-2 rounded hover:bg-blue-600"
        >
          {loading ? (
            <div className="flex justify-center">
              <CgSpinner className="animate-spin text-center w-7 h-7" />
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
