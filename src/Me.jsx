import "./Me.css";

export default function Me() {

  const downloadResume=()=>{
    const link = document.createElement("a");
    link.href = "/NANIGOPAL%20RANA%20Resume.pdf"; // Update this path to your resume file
    link.download = "Nanigopal_Rana_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="me-container container">
        <div>
          <p>
            Hi,<br></br>This is Nanigopal Rana.
          </p>
          <button className="text-button" onClick={downloadResume}>Download my resume</button>
        </div>
        <div className="image-container">
          <img src="/java-logo.png" alt="profile-picture" />
        </div>
      </div>
    </>
  );
}
