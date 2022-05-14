import { Spinner } from 'react-bootstrap';
import styles from './spinner-comp.module.scss';

export const SpinnerComp = () => {
  return (
    <div className={styles.wrapper}>
      <div className="">
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="warning" />
      </div>
      <h4>Loading...</h4>
    </div>
  );
};
