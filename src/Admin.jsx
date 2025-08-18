import { useEffect, useState } from "react";
import FeedbackDisplayCard from "./components/FeedbackDisplayCard";
import axios, { Axios } from "axios";
import AdminLogin from "./components/AdminLogin";

export default function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showDialog, setShowDialog] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchFeedbacks = (email, password) => {
    const cred = btoa(`${email}:${password}`);
    axios
      .get("/api/feedback/get", {
        headers: {
          Authorization: `Basic ${cred}`,
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setFeedbacks(response.data);
          setShowDialog(false);
          setErrorMessage("");
        }
      })
      .catch((error) => {
        console.error("Error fetching feedbacks:", error);
        if (error.response?.status === 401)
          setErrorMessage("Invalid credentials! "+error.message);
        else if (error.response?.data?.message) {
          setErrorMessage(error.response.data.message);
        } else if (error.message) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Failed to fetch feedbacks. Please try again later.");
        }
      });
  };

  return (
    <>
      <div className={`h-screen my-10 p-4 ${showDialog ? "blur-sm" : ""}`}>
        <h1 className="text-center text-4xl font-medium mb-10">Admin Panel</h1>
        <h1 className="text-2xl mb-4 font-medium">Feedbacks</h1>

        <div className="gap-2 flex flex-col">
          {feedbacks && feedbacks.length > 0 ? (
            feedbacks.map((feedbacks, index) => (
              <FeedbackDisplayCard key={index} feedback={feedbacks} />
            ))
          ) : (
            <p className="text-center mt-4 text-gray-500">
              No feedbacks available
            </p>
          )}
        </div>
      </div>
      <div
        className="fixed inset-0 shadow-2xl z-50 flex justify-center items-center"
        hidden={!showDialog}
      >
        <AdminLogin onSubmit={fetchFeedbacks} errorMessage={errorMessage} />
      </div>
    </>
  );
}
