import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLinkCSS from "./ActiveLink.module.css";

function ActiveLink({ text, href }) {
  const { asPath } = useRouter();
  let classname = asPath === href ? "link-item-active" : "link-item";

  return (
    <Link href={href} legacyBehavior>
      <a className={ActiveLinkCSS[classname]}>{text}</a>
    </Link>
  );
}

export default ActiveLink;
