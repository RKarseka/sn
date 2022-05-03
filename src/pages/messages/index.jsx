import { useId } from 'react';
import { DialogItem } from '../../components/dialog-item';
import { Message } from '../../components/message';
import styles from './messages.module.scss';

const mgs = [
  { id: 0, text: 'text1' },
  { id: 1, text: 'text2' },
  { id: 2, text: 'text3' },
  { id: 3, text: 'text4' },
  { id: 4, text: 'text5' },
  { id: 5, text: 'text6' },
];

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
          {mgs.map(({ id, ...props }) => (
            <Message key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
