import React from "react";
import { Link } from "gatsby";
import "../styles/components/nav.scss";

function GlobalNav() {
  const [navClasses] = React.useState('nav-border');
  const [homeButtonClasses] = React.useState('btn draw-border nav-button');

  return (
      <nav className={navClasses}>
        <Link to="/" id="home-link" className={homeButtonClasses} >HOME</Link>
        <Link to="/projects" className="btn draw-border nav-button" >PROJECTS</Link>
        <Link to="/about" className="btn draw-border nav-button" >ABOUT</Link>
      </nav>
  );
}

export default GlobalNav;
