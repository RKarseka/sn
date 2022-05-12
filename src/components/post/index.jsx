import { Card } from 'react-bootstrap';
import post from './post.module.scss';

export const Post = ({ text }) => {
  return (
    <Card
      border="secondary"
      bg="light"
      style={{ width: '15rem' }}
      className="mb-2"
      body
    >
      {text}
    </Card>
  );
};
