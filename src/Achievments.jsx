import { FiExternalLink } from "react-icons/fi";

function Achievments() {
  const achievments = [
    {
      title: " Java (Basic) Certification – HackerRank ",
      link: "https://www.hackerrank.com/certificates/1340cee63b32",
    },
    {
      title: "⭐⭐⭐⭐⭐ programmer Java – HackerRank ",
      link: "https://www.hackerrank.com/profile/nanigopalr972",
    },
  ];

  return (
    <div className="mb-16">
      <p className="text-3xl font-medium">Achievments</p>

      <div className="mt-4 ms-4">
        {achievments.map((achievment, index) => (
          <div
            key={index}
            className="lg:w-2/3 w-full flex gap-2 mb-4 backdrop-blur-2xl bg-white/20 border border-black/10 rounded-lg p-4 items-center"
          >
            <p className="text-lg font-mono">{achievment.title}</p>
            <a href={achievment.link} target="_blank">
              <FiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievments;
