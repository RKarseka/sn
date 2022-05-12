import styles from './timeline.module.scss';

import { Post } from '../../components/post';
import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';

export const Timeline = ({ posts, AddPost }) => {
  const [input, setInput] = useState('');

  const onAddPost = () => {
    AddPost(input);
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
