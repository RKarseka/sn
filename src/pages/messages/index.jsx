import { useId } from 'react';
import { DialogItem } from '../../components/dialog-item';
import { Message } from '../../components/message';
import styles from './messages.module.scss';

// const ;

export const Messages = ({ messages, users }) => {
  const id = useId();
  return (
    <section className={styles.wrapper}>
      Messages
      <div className={styles.container}>
        <div className={styles.interlocutors}>
          {users.map(({ id, text }) => (
            <DialogItem key={id} text={text} />
          ))}
        </div>
        <div className={styles.messages}>
          {messages.map(({ id, ...props }) => (
            <Message key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
