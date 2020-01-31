import React from "react";
import "./footer.css";
import {Link} from "react-router-dom";

const Footer = () => (
    <footer>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <a href="https://github.com/Matti50">Projects</a> </li>
            <li> <Link to="/contact"> Contact</Link> </li>
        </ul>
        <p> &copy; Matias Cicchitti - Software Developer</p>
    </footer>
)
export default Footer;