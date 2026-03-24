import styles from "../styles/Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <h1 className={styles.logo}>MyBlog</h1>
            </div>
        </nav>
    );
}

export default Navbar;
