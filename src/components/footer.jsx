import React from "react";

function Footer() {
  const day = new Date();
  const year = day.getFullYear();

  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

export default Footer;
