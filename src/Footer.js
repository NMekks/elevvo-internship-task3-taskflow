import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center text-center align-content-center text-white">
      <div id="rightfooter">
        <h3 className="md:text-3xl lg:text-2xl ">Follow me on</h3>
        <div id="social-media-footer">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-tiktok" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-x-twitter" />
              </a>
            </li>
            
          </ul>
        </div>
        <br />
        <p>© Nusaibah Mekkaoui, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
