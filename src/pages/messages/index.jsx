import { useId } from 'react';
import { Link } from 'react-router-dom';
import { DialogItem } from '../../components/dialog-item';
import styles from './messages.module.scss';

export const Messages = () => {
  const id = useId();
  return (
    <section className={styles.wrapper}>
      Messages
      <div className={styles.container}>
        <div className={styles.interlocutors}>
          {new Array(5).fill('').map((_, index) => (
            <DialogItem key={id + index} id={index} />
          ))}
        </div>
        <div className={styles.messages}>
          {new Array(5).fill('').map((_, index) => (
            <Link to={'/'} key={id + index} className="">{`message${
              index + 1
            }`}</Link>
          ))}
        </div>
      </div>
    </section>
  );
};
