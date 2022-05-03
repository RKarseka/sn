import { Link } from 'react-router-dom';

import styles from './dialog.module.scss';

export const DialogItem = ({ id }) => {
  return <Link to={`/messages/${id}`} className="">{`name${id + 1}`}</Link>;
};
