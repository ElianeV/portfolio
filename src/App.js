import "./App.scss";
import React, { useState } from "react";
import BigEyebrow from "./images/BigEyebrow.png";
import NestingDoll from "./images/NestingDoll.png";
import Signature from "./images/Signature.png";
import ProjTopLeft from "./images/ProjTopLeft.png";
import ProjBottomLeft from "./images/ProjBottomLeft.png";
import ProjTopRight from "./images/ProjTopRight.png";
import ProjBottomRight from "./images/ProjBottomRight.png";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [projTitle, setProjTitle] = useState("OPEN US...");
  const [projDescription, setProjDescription] = useState("");
  const [projSoftware, setProjSoftware] = useState("");
  const [gitHubLink, setGithubLink] = useState("");

  const splitCover = () => {
    setIsHovered(true);
    setProjTitle("BENDY CANDLE");
    setProjDescription(
      "An app created to improve your flexibility. It allows you to create custom stretch routines and runs an automatic countdown."
    );
    setProjSoftware("HTML CSS/SASS Javascript React ");
    setGithubLink(
      <a href="https://github.com/ElianeV/Bendy-Candle" target="_blank">
        <i class="fa fa-github"></i>
      </a>
    );
  };
  const joinCover = () => {
    setIsHovered(false);
  };
  const splitCover2 = () => {
    setIsHovered2(true);
    setProjTitle("OUT BOULDERING");
    setProjDescription(
      "Check the weather in Ireland to see which outdoor bouldering areas are ideal to visit."
    );
    setProjSoftware("HTML CSS/SASS Javascript React ");
    setGithubLink(
      <a href="https://github.com/ElianeV/Bouldering" target="_blank">
        <i class="fa fa-github"></i>
      </a>
    );
  };
  const joinCover2 = () => {
    setIsHovered2(false);
  };
  const splitCover3 = () => {
    setIsHovered3(true);
    setProjTitle("MYSTERY PROJECT");
    setProjDescription("This mystery project is still in the making.");
    setProjSoftware("N/A N/A N/A N/A N/A ");
    setGithubLink(
      <a href="#" target="_blank">
        <i class="fa fa-github"></i>
      </a>
    );
  };
  const joinCover3 = () => {
    setIsHovered3(false);
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div id="Home" className="FullScreen Intro">
          <nav>
            <ul>
              <li>
                <a href="#Home">HOME</a>
              </li>
              <li>
                <a href="#Projects">PROJECTS</a>
              </li>
              <li>
                <a href="#Contact">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="NestingDoll">
            <img src={NestingDoll} alt="nestingdoll" />
          </div>
          <div className="Eyebrows">
            <img id="BigEyebrow" src={BigEyebrow} alt="eyebrow" />
            <img id="MidEyebrow" src={BigEyebrow} alt="eyebrow" />
            <img id="SmallEyebrow" src={BigEyebrow} alt="eyebrow" />
          </div>
          <div className="Signature">
            <img id="Signature" src={Signature} alt="signature" />
            <p id="WebDev"> WEB DEVELOPMENT</p>
          </div>
        </div>
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div id="Projects" className="FullScreen Projects">
          <div className="Description">
            <h2>{projTitle}</h2>
            <h3>{projDescription}</h3>
            <p>
              {projSoftware}
              {gitHubLink}
            </p>
          </div>
          <div className="AllProjects">
            <div
              id="Proj1"
              className="Project"
              onClick={() => window.open("https://www.bendycandle.com")}
              onMouseEnter={splitCover}
              onMouseLeave={joinCover}
              style={{ cursor: "pointer" }}
            >
              <div
                className={
                  isHovered
                    ? "ProjCoverTop Proj1 AnimatedTop"
                    : "ProjCoverTop Proj1"
                }
              >
                <img src={ProjTopLeft} />
              </div>
              <div
                className={
                  isHovered
                    ? "ProjCoverBottom Proj1 AnimatedBottom"
                    : "ProjCoverBottom Proj1"
                }
              >
                <img src={ProjBottomLeft} />
              </div>
            </div>
            <div
              id="Proj2"
              className="Project"
              onClick={() => window.open("#")}
              onMouseEnter={splitCover2}
              onMouseLeave={joinCover2}
              style={{ cursor: "pointer" }}
            >
              <div
                className={
                  isHovered2
                    ? "ProjCoverTop Proj2 AnimatedTop"
                    : "ProjCoverTop Proj2"
                }
              >
                <img src={ProjTopLeft} />
              </div>
              <div
                className={
                  isHovered2
                    ? "ProjCoverBottom Proj2 AnimatedBottom"
                    : "ProjCoverBottom Proj2"
                }
              >
                <img src={ProjBottomLeft} />
              </div>
            </div>
            <div
              id="Proj3"
              className="Project"
              onClick={() => window.open("#")}
              onMouseEnter={splitCover3}
              onMouseLeave={joinCover3}
              style={{ cursor: "pointer" }}
            >
              <div
                className={
                  isHovered3
                    ? "ProjCoverTop Proj3 AnimatedTop"
                    : "ProjCoverTop Proj3"
                }
              >
                <img src={ProjTopRight} />
              </div>
              <div
                className={
                  isHovered3
                    ? "ProjCoverBottom Proj3 AnimatedBottom"
                    : "ProjCoverBottom Proj3"
                }
              >
                <img src={ProjBottomRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div id="Contact" className="FullScreen Contact">
          <div className="formContainer">
            <div className="socialMedia">
              <a href="https://github.com/ElianeV" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/eliane-van-der-cruyssen/"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="inputDiv">
                <input
                  type="text"
                  name="name"
                  className="underlineEffect"
                  placeholder="NAME"
                  required
                />
                <span className="focusBorder"></span>
              </div>
              <div className="inputDiv">
                <input
                  type="email"
                  name="email"
                  className="underlineEffect"
                  placeholder="EMAIL"
                  required
                />
                <span className="focusBorder"></span>
              </div>
              <div className="inputDiv">
                <textarea
                  name="message"
                  className="underlineEffect2"
                  placeholder="MESSAGE"
                  required
                  rows={4}
                ></textarea>
                <span className="focusBorder"></span>
              </div>
              <button type="submit" className="button">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
