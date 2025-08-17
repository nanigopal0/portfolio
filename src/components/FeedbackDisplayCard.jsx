export default function FeedbackDisplayCard({ feedback }) {
  return (
    <div
      className="border p-4 rounded-2xl backdrop-blur-lg 
    border-white/20 hover:border-white/30 hover:bg-black/20 bg-black/10 "
    >
      <div className="flex justify-between mb-2 items-center">
        <h2 className="font-mono text-sm text-green-400">{feedback.email}</h2>
        <p className="text-sm font-mono text-gray-400">
          {new Date(feedback.date).toLocaleString()}
        </p>
      </div>
      <p className=" text-amber-300">{feedback.feedbackMessage}</p>
    </div>
  );
}
