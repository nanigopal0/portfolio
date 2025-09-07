import { FiDelete } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function FeedbackDisplayCard({ feedback, handleDelete }) {

  return (
    <div
      className="border p-4 rounded-2xl backdrop-blur-lg justify-between
    border-white/20 hover:border-white/30 hover:bg-black/20 bg-black/10 flex"
    >
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-mono text-sm text-green-400">{feedback.email}</h2>
        <p className=" text-amber-300">{feedback.feedbackMessage}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-sm font-mono text-gray-400">
          {new Date(feedback.date).toLocaleString()}
        </p>
        <MdDelete onClick={handleDelete} size={20} color="red" className="hover:bg-amber-50 rounded-lg cursor-pointer"/>
      </div>
    </div>
  );
}
