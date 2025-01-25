import "./Me.css";

export default function Me() {
  return (
    <>
      <div className="me-container container">
        <div>
          <p>
            Hi,<br></br>This is Nanigopal Rana.
          </p>
          <button className="text-button">Download my resume</button>
        </div>
        <div className="image-container">
          <img src="/src/assets/java-logo.png" alt="profile-picture" />
        </div>
      </div>
    </>
  );
}
