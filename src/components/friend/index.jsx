import styles from './friend.module.scss';

export const Friend = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src=""
        alt="friend photo"
        width={50}
        height={50}
        className={styles.photo}
      />
      <h4 className={styles.name}>Name</h4>
      <article className={styles.info}>Info</article>
    </div>
  );
};
