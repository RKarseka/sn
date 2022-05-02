import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={classNames(styles.item, styles.item_disabled)}>
          <Link to={'/'}>Timeline</Link>
        </li>
        <li className={classNames(styles.item, styles.item_disabled)}>About</li>
        <li className={classNames(styles.item, styles.item_disabled)}>
          Friends
        </li>
        <li className={classNames(styles.item, styles.item_disabled)}>
          <Link to={'/messages'}>Messages</Link>
        </li>
      </ul>
    </nav>
  );
};
