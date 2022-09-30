import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.iconleft}>
        <a href='/'><span className={`${styles.icon} fa fa-tasks`} /></a>
      </div>
      <div className={styles.navbar}>
        <ul className={styles.navright}>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/favorite'>FAVORITE</a>
          </li>
          <li>
            <a href='about'>ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;