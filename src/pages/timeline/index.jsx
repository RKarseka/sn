import styles from './timeline.module.scss';

import { Post } from '../../components/post';
import { addPostAC } from '../../redux/profile-reducer';
import { useState } from 'react';

export const Timeline = ({ posts, onAddPost }) => {
  const [input, setInput] = useState('');

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
        <button
          onClick={() => {
            onAddPost(input);
            setInput('');
          }}
        >
          Add post
        </button>
      </div>
      <div className="posts">
        {posts.map(({ id, ...props }) => (
          <Post key={id} {...props} />
        ))}
      </div>
    </section>
  );
};
