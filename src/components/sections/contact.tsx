/*eslint  jsx-a11y/control-has-associated-label: "off"*/
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

import "../../styles/sections/contact.scss";

const Contact: React.FC = () => (
  <div className="contact-section">
    <div className="content-cont">
      <h1 className="section-title">Feel free to reach out.</h1>
      <p>Direct Email</p>
      <a
        href="https://mail.google.com/mail/u/0/?fs=1&to=umid19999@gmail.com&su=Portfolio%20Inquiry&tf=cm"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <HiOutlineMail />
        </button>
      </a>
    </div>
    <div className="content-cont">
      <p>Other Platforms</p>
      <div className="button-cont">
        <a href="https://github.com/exc1ut" target="_blank" rel="noreferrer">
          <button>
            <SiGithub />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/umid-sultonov-4b857b171/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <SiLinkedin />
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
