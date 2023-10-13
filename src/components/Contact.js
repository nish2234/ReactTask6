import React from 'react';
import '../css/Contact.css';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { MdEmail } from "react-icons/md";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-main">
                <div className="contact-head">
                    Contact Me
                </div>
                <div className="contact-comp">
                    <div className="icons">
                        <a href="https://github.com/nish2234">
                            <AiFillGithub/>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/nishant-kumar-singh-64ab49216/">
                            <AiFillLinkedin/>
                        </a>
                    </div>
             
                  
                    <div className="icons">
                        <a href="mailto:nishant2003singh@gmail.com">
                            <MdEmail />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact