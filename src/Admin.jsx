import { useEffect, useState } from "react";
import FeedbackDisplayCard from "./components/FeedbackDisplayCard";
import axios from "axios";
import AdminLogin from "./components/AdminLogin";
import { CgSpinner } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";

export default function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ping();
  }, []);

  const ping = async () => {
    try {
      await axios.get(`/api/admin/ping`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      fetchFeedbacks();
    } catch (error) {
      setShowDialog(true);

      console.log(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch feedbacks!"
      );
    }
  };

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/feedback/get`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFeedbacks(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch feedbacks!"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/feedback/delete/${id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchFeedbacks();
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete feedback!"
      );
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    fetchFeedbacks();
  };

  const handleLogout = async () => {
    try {
      await axios.get(`/api/admin/logout`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setShowDialog(true);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete feedback!"
      );
    }
  };

  return (
    <div className="my-10 h-screen">
      <div className={` p-4 ${showDialog && "blur-sm "}`}>
        <div className="mb-10 flex justify-between">
          <h1 className="place-content-center  text-4xl font-medium ">
            Admin Panel
          </h1>
          <LuLogOut
            size={24}
            className=" justify-items-end"
            color="orange"
            onClick={handleLogout}
          />
        </div>
        <h1 className="text-2xl mb-4 font-medium">Feedbacks</h1>
        {errorMessage && (
          <h1 className="text-orange-400 font-medium mb-4">{errorMessage}</h1>
        )}
        {loading && <CgSpinner size={40} className="animate-spin" />}
        <div className="gap-2 flex flex-col">
          {feedbacks && feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <FeedbackDisplayCard
                key={index}
                feedback={feedback}
                handleDelete={() => handleDelete(feedback.id)}
              />
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
        <AdminLogin onClose={handleCloseDialog} />
      </div>
    </div>
  );
}
