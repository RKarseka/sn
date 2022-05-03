import { Link } from 'react-router-dom';

import styles from './dialog.module.scss';

export const DialogItem = ({ id, text }) => {
  return (
    <Link to={`/messages/${id}`} className="">
      {text}
    </Link>
  );
};
