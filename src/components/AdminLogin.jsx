import axios from "axios";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

export default function AdminLogin({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // onSubmit(email, password);
    setLoading(true);
    const api = import.meta.env.VITE_SERVER_URL;
    try {
      const response = await axios.post(
        `${api}/admin/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 200) {
        console.log(response.data);
        onClose();
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(
        error.response.data.message || error.message || "Failed to login!"
      );
      setErrorMessage(
        error.response.data.message || error.message || "Failed to login!"
      );
    } finally {
      setLoading(false);
    }
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
          className="w-full bg-blue-500 text-white font-medium text-lg p-2 rounded hover:bg-blue-600 cursor-pointer"
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
