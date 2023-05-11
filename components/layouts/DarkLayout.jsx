import DarkLayoutCSS from "./DarkLayout.module.css";

function DarkLayout({ children }) {
  return <div className={DarkLayoutCSS.container}>{children}</div>;
}

export default DarkLayout;
