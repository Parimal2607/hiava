import React from "react";
import { Facebook, GitHub, Instagram, Linkedin, Twitter } from "react-feather";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer className="text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <Facebook/>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #55acee" }}
              href="#!"
              role="button"
            >
             <Twitter/>
            </a>

            

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #ac2bac" }}
              href="#!"
              role="button"
            >
            
              <Instagram/>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
             
              <Linkedin/>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
            
              <GitHub/>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {(new Date().getFullYear())} Copyright 
          <a className="text-white ms-50" href="#">
          Hiava.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
