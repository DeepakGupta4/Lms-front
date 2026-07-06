import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footersec flex flex-center flex-col gap-2">
        <div className="logo">
          {/* <img src="/img/logo.png" alt="logo" /> */}
        </div>

        <ul className="ul flex gap-2">
          <Link to={"/services"}>Services</Link>
          <Link to={"/projects"}>Projects</Link>
          <a href="/Deepak Gupta Resume.pdf" download>Resume</a>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>

        <ul className="hero_social">
          <li><a href="https://x.com/home"><FaTwitter /></a></li>
          <li><a href="https://www.instagram.com/deepakgupta_8172/?igsh=MTQxZnZvdzYydDMwNg%3D%3D#"><FaInstagram /></a></li>
          <li><a href="https://www.linkedin.com/in/deepak-gupta-633b00286/" target="_blank" rel="noopener noreferrer"><GrLinkedinOption /></a></li>
          <li><a href="https://github.com/DeepakGupta4"><FaGithub /></a></li>
        </ul>

        <div className="copyrights">
          &copy; 2025 All Right Reserved By <span>DeepakGupta</span>
        </div>
      </div>
    </footer>
  );
}
