import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.css";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-icons">

        <IconContext.Provider 
          value={ { 
            style: {
              backgroundColor: "white",
              color: "blue",
              fontSize: "1rem",
              // margin: "1vw 5vw 1vw 0",
            },
          }}
          >
          <a
            href="https://www.linkedin.com/in/n-r-684809310"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            style: {
              color: "white",
              fontSize: "1rem",
              // margin: "1vw 5vw 1vw 0",
            },
          }}
          >
          <a
            href="mailto:nanigopalr972@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <MdEmail />
          </a>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            style: {
              color: "white",
              fontSize: "1rem",
              // margin: "1vw 5vw 1vw 0",
            },
          }}
        >
          <a href="tel:+917029884994" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt />
          </a>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            size: "1rem",
            style: {
              // margin: "1vw 5vw 1vw 0",
            },
          }}
          >
          <a
            href="https://github.com/nanigopal0"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaGithub />
          </a>
        </IconContext.Provider>
            </div>
        <br />
        
        <p>Write a feedback</p>
        <br />
        <p>Privacy Policy</p>
        <br />
        <p>Terms of Service</p>
        <br />
        <p>© 2025 All rights reserved</p>
        <br />
      </div>
    </>
  );
}
