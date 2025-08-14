// import "./Education.css";

import EducationCard from "./components/EducationCard";

function Education() {
  const education = [
    {
      name: "Academy of Technology (Present)",
      class:
        "Bachelor of Technology in Electronics and Communication Engineering",
      year: "2022 ",
      address: "Hooghly, West Bengal, India",
      result: "7.93 CGPA",
    },
    {
      name: "Burdwan Town School",
      year: "2021",
      address: "Purba Bardhaman, West Bengal, India, 713141",
      class: "Higher Secondary (WBCHSE Board)",
      result: "79.6% Marks",
    },

    {
      name: "Jagdabad Sashi Bhusan High School",
      year: "2019",
      address: "Jagdabad, Purba Bardhaman, West Bengal, India , 713141",
      class: "Secondary (WBBSE Board)",
      result: "76.57% Marks",
    },
  ];
  return (
    <div className="mb-16">
      <p className="text-3xl font-medium">Education</p>

      <div className="mt-4 flex flex-col gap-8 items-center">
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            address={edu.address}
            degree={edu.class}
            result={edu.result}
            schoolName={edu.name}
            year={edu.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
