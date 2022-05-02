import { Friend } from '../../components/friend';
import styles from './main.module.scss';

export const MainPage = () => {
  return (
    <section className={styles.wrapper}>
      MainPage
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </section>
  );
};
