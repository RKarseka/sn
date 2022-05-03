import { Friend } from '../../components/friend';
import styles from './friends.module.scss';

export const Friends = ({ friends }) => {
  return (
    <section className={styles.wrapper}>
      Friends
      <div className={styles.container}>
        {friends.map(({ id, ...props }) => (
          <Friend key={id} {...props} />
        ))}
      </div>
    </section>
  );
};
