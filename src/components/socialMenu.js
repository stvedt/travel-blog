import { Link } from "gatsby";
import React from "react";

const SocialMenu = () => (
  <ul>
    <li>
      <Link to="/" className="site-button-link"><i className="fa fa-facebook"></i></Link>
    </li>
    <li>
      <Link to="/" className="site-button-link"><i className="fa fa-twitter"></i></Link>
    </li>
    <li>
      <Link to="/" className="site-button-link"><i className="fa fa-pinterest-p"></i></Link>
    </li>
    <li>
      <Link to="/" className="site-button-link"><i className="fa fa-instagram"></i></Link>
    </li>
  </ul>
) 

export default SocialMenu;
