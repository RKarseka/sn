import styles from './friend.module.scss';
import imgAvatarMini from '../../assets/img/user.jpg';

export const Friend = ({
  id,
  name,
  status,
  photos: { small, large },
  followed,
}) => {
  return (
    <div className={styles.wrapper}>
      <p>{id}</p>
      <img
        src={small || imgAvatarMini}
        alt="friend photo"
        width={50}
        height={50}
        className={styles.photo}
      />
      <h4 className={styles.name}>{name}</h4>
      <button>{followed ? 'unfollow' : 'follow'}</button>
      {status && <article className={styles.info}>{status}</article>}
    </div>
  );
};
