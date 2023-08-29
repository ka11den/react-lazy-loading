import { Link } from "react-router-dom";
import cn from "classnames"
import styles from "./LayoutHeader.module.scss"

export function LayoutHeader() {
  return (
    <header className={styles.header}>
      <nav className={cn(styles.nav, styles.container)}>
        <Link to="/" className={styles.nav__logo}>
          react-lazy-loading
        </Link>

        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            {/* change theme */}
            <button>change theme</button>
          </ul>
        </div>

      </nav>
  </header>
  );
}