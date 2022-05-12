import { Image, ProgressBar } from 'react-bootstrap';
import imgInProcess from '../../assets/img/in-progress.png';
import styles from './main.module.scss';

export const MainPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className="app">
        <h1>Social newtwork</h1>
        <Image src={imgInProcess} />
        <ProgressBar animated now={55} />

        <h3>The website is under construction</h3>
        <h5>You can try Friends and Timeline pages</h5>
      </div>
    </section>
  );
};
