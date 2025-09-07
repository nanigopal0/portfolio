import axios from "axios";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

export default function Feedback() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !feedback) {
      setMsg("❌ Please fill in all fields!");
      setError(true);
      return;
    }
    const api = import.meta.env.VITE_SERVER_URL;
    setLoading(true);
    axios
      .post(`${api}/feedback/add`, {
        email: email,
        feedbackMessage: feedback,
      })
      .then((resp) => {
        if (resp.status === 200) {
          setMsg("✅ Feedback submitted successfully!");
          setError(false);
        } else {
          setMsg("❌ Failed to submit feedback!");
          setError(true);
        }
      })
      .catch((error) => {
        console.error("There was an error submitting the feedback!", error);
        setMsg("❌ " + (error || "Failed to submit feedback!"));
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

    setEmail("");
    setFeedback("");
  };

  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Feedback</h1>
      <div className="flex justify-center ">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-2 justify-center items-start border border-white/30 bg-black/20 backdrop-blur-lg rounded-2xl p-6">
          <label className="text-lg"> Enter Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-lg mb-4 bg-white/90 text-black p-2 rounded-lg"
          />
          <label className="text-lg">Feedback</label>
          <textarea
            placeholder="Enter your feedback here"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="text-lg bg-white/90 text-black p-2 rounded-lg w-full min-h-32"
          />
          {msg && (
            <div
              className={`${
                error
                  ? "bg-orange-200 text-red-800"
                  : "bg-green-200 text-green-900"
              } p-2 text-md rounded-lg mt-4`}
            >
              {msg}
            </div>
          )}
          <button
            className="place-self-center mt-4 border border-white/30 font-medium px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-800"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="flex justify-center">
                <CgSpinner className="animate-spin text-center w-7 h-7" />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
