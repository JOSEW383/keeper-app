import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer--pin">
      <p>created by Jose ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
