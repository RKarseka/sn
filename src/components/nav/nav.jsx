import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { UserPhoto } from '../user-photo';
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={classNames(styles.wrapper, styles.container)}>
      <UserPhoto />
      <ul className={styles.list}>
        <li className={classNames(styles.item)}>
          <NavLink to={'/'}>About</NavLink>
        </li>
        <li className={classNames(styles.item)}>
          <NavLink to={'/timeline'}>Timeline</NavLink>
        </li>
        <li className={classNames(styles.item)}>
          <NavLink to={'/friends'}>Friends</NavLink>
        </li>
        <li className={classNames(styles.item)}>
          <NavLink to={'/messages'}>Messages</NavLink>
        </li>
        <li className={classNames(styles.item, styles.item_disabled)}>
          <NavLink to={'/messages'}>News</NavLink>
        </li>
      </ul>
    </nav>
  );
};
