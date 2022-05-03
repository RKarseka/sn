import styles from './timeline.module.scss';

import { Post } from '../../components/post';
import { useState } from 'react';

export const Timeline = ({ profilePage, addPost }) => {
  const { posts } = profilePage;

  const [input, setInput] = useState('');

  const onAddPost = (e) => {
    // e.preventDefault();
    addPost(input);
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
