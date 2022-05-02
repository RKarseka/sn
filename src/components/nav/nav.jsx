import classNames from 'classnames';
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={classNames(styles.item, styles.item_disabled)}>
          Timeline
        </li>
        <li className={classNames(styles.item, styles.item_disabled)}>About</li>
        <li className={classNames(styles.item, styles.item_disabled)}>
          Friends
        </li>
      </ul>
    </nav>
  );
};
