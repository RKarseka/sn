import { useEffect } from 'react';
import { Friend } from '../../components/friend';
import { axiosGet } from '../../utils/axios';
import styles from './friends.module.scss';

export const Friends = ({ users, setFriends }) => {
  useEffect(() => {
    (async () => {
      try {
        setFriends(
          await axiosGet('/users?page=1880').then((data) => data.items)
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <section className={styles.wrapper}>
      Friends
      <div className={styles.container}>
        {users.map((item) => (
          <Friend key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
