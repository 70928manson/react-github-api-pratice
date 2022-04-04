import React from "react";

const Footer = () => {
    return <div className="bg-dark py-5">
    <div className="container">
      <div className="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
        <p className="text-white h4">LOGO</p>
        <ul className="d-flex list-unstyled mb-0 h4">
          <li><a href="https://www.facebook.com/john.manson.988/" className="text-white mx-3" target="_blank"><i className="bi bi-facebook"></i></a></li>
          {/* <li><a href="#" className="text-white mx-3" target="_blank"><i className="fab fa-instagram"></i></a></li> */}
          <li><a href="https://github.com/70928manson" className="text-white ms-3" target="_blank"><i className="bi bi-github"></i></a></li>
        </ul>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
        <div className="mb-md-0 mb-1">
          <p className="mb-0">02-3456-7890</p>
          <p className="mb-0">manson972@yahoo.com</p>
        </div>
        <p className="mb-0">© 2022 LOGO All Rights Reserved.</p>
      </div>
    </div>
  </div>
}

export default Footer;