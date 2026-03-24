import styles from "../styles/Navbar.module.css";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.link}><h1 className={styles.logo}>MyBlog</h1></Link>
        </nav>
    );
}

export default Navbar;
