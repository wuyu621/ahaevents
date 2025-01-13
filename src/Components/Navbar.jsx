import { useState, useRef } from "react";
import { links, social, service } from "../data";
import { FaBars } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/" className="title">
            <h3>
              <span>AHA</span>Events
            </h3>
          </NavLink>
          <button className="nav-toggle" onClick={toggleShowLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" style={linkContainerStyles}>
          <div ref={linksRef}>
            <ul className="links">
              {links.map((link) => {
                const { url, title } = link;
                return (
                  <li key={uuidv4()}>
                    <a href={url}>{title}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="links service-links">
              {service.map((item) => {
                return (
                  <li key={uuidv4()}>
                    <NavLink to={`/service/${item.url}`} className="nav-link">
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
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

      {/* <div className="nav-service">
        <ul className="links service-links">
          {service.map((item) => {
            return (
              <li key={uuidv4()}>
                <Link to={`/service/${item.url}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
