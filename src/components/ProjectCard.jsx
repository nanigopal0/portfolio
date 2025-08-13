import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  liveLink,
  projectName,
  githubLink,
  description,
}) {
  return (
    <div className="rounded-2xl p-4 w-full backdrop-blur-md bg-white/10 border border-white/20">
      <div className="flex items-center gap-3 justify-center mt-3 mb-5">
        <h1
          className="text-2xl font-medium text-cyan-400"
        >
          {projectName}
        </h1>
        <a href={liveLink} target="_blank" className="border-white/50 hover:border hover:rounded-full p-1 ">
            <FiExternalLink/>
        </a>
        <a
          href={githubLink}
          target="_blank"
          about="Github link"
          rel="noopener noreferrer"
          className="project-github-link"
        >
          <FaGithub size={20}/>
        </a>
      </div>
      <p className="text-md">{description}</p>
    </div>
  );
}