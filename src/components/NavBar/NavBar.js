import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.iconleft}>
        <Link to='/'><span className={`${styles.icon} fa fa-tasks`} /></Link>
      </div>
        <ul className={styles.navright}>
          <li>
            <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to='/'>HOME</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">FAVORITE</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">ABOUT</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar;