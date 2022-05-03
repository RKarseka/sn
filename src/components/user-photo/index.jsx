import { Link } from 'react-router-dom';
import imgUser from '../../assets/img/user.jpg';
import styles from './photo.module.scss';

export const UserPhoto = () => {
  return (
    <Link to={'/'}>
      <img
        className={styles.photo}
        src={imgUser}
        alt="user photo"
        width={50}
        height={50}
      />
    </Link>
  );
};
