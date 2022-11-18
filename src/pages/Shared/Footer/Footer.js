import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className="p-10"
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className="footer container mx-auto text-center">
        <div>
          <span className="footer-title">Services</span>
          <p className="link link-hover">Branding</p>
          <p className="link link-hover">Design</p>
          <p className="link link-hover">Marketing</p>
          <p className="link link-hover">Advertisement</p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <p className="link link-hover">About us</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">Jobs</p>
          <p className="link link-hover">Press kit</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p className="link link-hover">Terms of use</p>
          <p className="link link-hover">Privacy policy</p>
          <p className="link link-hover">Cookie policy</p>
        </div>
      </div>
      <div className="text-center mt-16">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
