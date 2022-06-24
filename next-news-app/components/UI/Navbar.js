import Link from "next/link";
import navbarStyles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <Link href="/">
        <a className={navbarStyles.link}>Home</a>
      </Link>
      <Link href="/news">
        <a className={navbarStyles.link}>News</a>
      </Link>
      <Link href="/about">
        <a className={navbarStyles.link}>About</a>
      </Link>
    </div>
  );
};

export default Navbar;
