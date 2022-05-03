import { Friend } from '../../components/friend';
import styles from './friends.module.scss';

const friends = [
  { id: 0, name: 'Name1' },
  { id: 1, name: 'Name2' },
  { id: 2, name: 'Name3' },
  { id: 3, name: 'Name4' },
];

export const Friends = () => {
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
