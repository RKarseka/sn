import styles from './timeline.module.scss';

import { Post } from '../../components/post';
import { useState } from 'react';
import { ADD_POST } from '../../state';

export const Timeline = ({ profilePage, dispatch }) => {
  const { posts } = profilePage;

  const [input, setInput] = useState('');

  const onAddPost = (e) => {
    // e.preventDefault();
    dispatch({ type: ADD_POST, payload: input });
    setInput('');
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.newPost}>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(evt) => {
            evt.key === 'Enter' && onAddPost();
          }}
          value={input}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className="posts">
        {posts.map(({ id, ...props }) => (
          <Post key={id} {...props} />
        ))}
      </div>
    </section>
  );
};
