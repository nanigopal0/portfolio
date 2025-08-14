import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="bg-black p-8 justify-around">
        <div className="flex items-center justify-evenly mb-8">
          <a
            href="https://www.linkedin.com/in/n-r-684809310"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <FaLinkedin color="blue" size={20} />
              <p className="text-sm">Linkedin</p>
            </div>
          </a>

          <a
            href="mailto:nanigopalr972@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 items-center">
              <MdEmail size={20} />
              <p className="text-sm">Email</p>
            </div>
          </a>

          <a href="tel:+917029884994" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={20} />
              <p className="text-sm">Phone</p>
            </div>
          </a>

          <a
            href="https://github.com/nanigopal0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <FaGithub size={20} />
              <p className="text-sm">Github</p>
            </div>
          </a>
        </div>
        <p className="text-md text-center mb-4">© 2025 All rights reserved</p>
      </div>
    </>
  );
}
