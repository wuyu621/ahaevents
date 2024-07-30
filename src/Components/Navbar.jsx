import { useState, useRef } from "react";
import { links, social } from "../data";
import { FaBars } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  //   const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleShowLinks = () => {
    // console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  //set the height of the linkContainers dynamically
  const linkContainerStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="title">
            <span>AHA</span>Events
          </h3>
          <button className="nav-toggle" onClick={toggleShowLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" style={linkContainerStyles}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { url, text } = link;
              return (
                <li key={uuidv4()}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { url, icon } = socialIcon;
            return (
              <li key={uuidv4()}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
