import React from "react";

function Footer() {
  var prsYear = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @{prsYear}</p>
    </footer>
  );
}

export default Footer;
