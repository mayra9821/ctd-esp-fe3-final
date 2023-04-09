import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { actualTheme } = useContext(ContextGlobal);
  return (
    <footer className={`text-bg-${actualTheme} h-40`} as="footer">
      <p>Powered by </p>
      <img height="40" src="images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
