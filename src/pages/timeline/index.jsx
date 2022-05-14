import { useState } from 'react';
import classNames from 'classnames';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import { Post } from '../../components/post';

import styles from './timeline.module.scss';

export const Timeline = ({ posts, addPost }) => {
  const [input, setInput] = useState('');

  const onAddPost = () => {
    addPost(input);
    setInput('');
  };

  return (
    <section className={styles.wrapper}>
      <InputGroup className={classNames(styles.newPost, 'mb-3')}>
        <FormControl
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(evt) => {
            evt.key === 'Enter' && onAddPost();
          }}
          value={input}
          placeholder="Enter your post"
          aria-label="New post"
          aria-describedby="basic-addon2"
        />
        <Button
          onClick={onAddPost}
          variant="outline-secondary"
          id="button-addon2"
        >
          Add post
        </Button>
      </InputGroup>
      <div className="posts">
        {posts.map((item) => (
          <Post key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
