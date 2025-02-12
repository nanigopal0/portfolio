import "./Education.css";

function Education() {
  const education = [
    {
      name: "Jagdabad Sashi Bhusan High School",
      year: "2019",
      address: "Jagdabad, Purba Bardhaman, West Bengal, India , 713141",
      class: "Secondary [WBBSE Board]",
      result: "76.57% Marks"
    },
    {
      name: "Burdwan Town School",
      year: "2021",
      address: "Purba Bardhaman, West Bengal, India, 713141",
      class: "Higher Secondary [WBCHSE Board]",
      result: "79.6% Marks"
    },

    {
      name: "Academy of Technology",
      class:
        "Bachelor of Technology in Electronics and Communication Engineering",
      year: "2022 - Present",
      address: "Hooghly, West Bengal, India",
      result: "7.93 CGPA",
    },
  ];
  return (
    <>
      <div className="container edu-container">
        <p>Education</p>

        {education.map((edu) => (
          <>
            <p className="heading">{edu.class}</p>
            <p className="school-name">
              {edu.name}, {edu.year}
            </p>
            <p className="school-address">
              {edu.address}
            </p>
            <p className="result">{edu.result}</p>
          </>
        ))}
        
      </div>
    </>
  );
}

export default Education;
