

import SkillsCard from "./components/SkillsCard";

function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React JS",
    "MySQL",
    "MongoDB",
    "JWT",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Spring Core",
    "Tailwind CSS",
    "REST API",
    "JDBC",
    "Hibernate",
    "Spring Data JPA",
    "Spring Security",
    "Docker",
    "Github CI/CD",
    "Maven",
    "JUnit"
  ];
  return (
    <div className="mb-16">
      <p className="text-3xl font-medium">Skills</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {skills.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
