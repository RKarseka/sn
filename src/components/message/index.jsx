import styles from './massage.module.scss';

export const Message = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};
