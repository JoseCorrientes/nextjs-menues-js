import NavbarCSS from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  return (
    <nav className={NavbarCSS["menu-container"]}>
      {menuItems.map((x) => (
        <ActiveLink key={x.href} text={x.text} href={x.href} />
      ))}
    </nav>
  );
}

export default Navbar;
