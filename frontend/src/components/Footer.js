import React from "react";

const Footer = () => (
    <footer>
        Created by <span id="rajat">Prasun</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/Prasundas99", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-hackerrank"
                onClick={() =>
                    window.open("https://www.hackerrank.com/12019009022046_F", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-linkedin"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/prasun--das/",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-stack-overflow"
                onClick={() =>
                    window.open(
                        "#",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-twitter"
                onClick={() =>
                    window.open("https://twitter.com/prsun_das__", "_blank")
                }
            ></i>
        </span>
    </footer>
);

export default Footer;
