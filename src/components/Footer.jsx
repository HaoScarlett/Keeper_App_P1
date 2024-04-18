import React from "react";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
function Footer() {
  const year = new Date().getFullYear().toString();
  //   console.log(year);
  return (
    <footer className="footer">
      <p>@Copyright {year}</p>
    </footer>
  );
}

export default Footer;
