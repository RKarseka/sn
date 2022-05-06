import { Friend } from '../../components/friend';
import styles from './friends.module.scss';

export const Friends = ({ users }) => {
  return (
    <section className={styles.wrapper}>
      Friends
      <div className={styles.container}>
        {users.map(({ id, ...props }) => (
          <Friend key={id} {...props} />
        ))}
      </div>
    </section>
  );
};
