export const state = {
  profilePage: {
    posts: [
      { id: 0, text: 'post1' },
      { id: 1, text: 'post2' },
      { id: 2, text: 'post3' },
      { id: 3, text: 'post4' },
      { id: 4, text: 'post5' },
      { id: 5, text: 'post6' },
    ],
    dialogs: [],
  },
  messagesPage: { messages: [] },

  msgs: [
    { id: 0, text: 'text1' },
    { id: 1, text: 'text2' },
    { id: 2, text: 'text3' },
    { id: 3, text: 'text4' },
    { id: 4, text: 'text5' },
    { id: 5, text: 'text6' },
  ],
  users: [
    { id: 0, text: 'user1' },
    { id: 1, text: 'user2' },
    { id: 2, text: 'user3' },
    { id: 3, text: 'user4' },
    { id: 4, text: 'user5' },
    { id: 5, text: 'user6' },
  ],
  posts: [
    { id: 0, text: 'post1' },
    { id: 1, text: 'post2' },
    { id: 2, text: 'post3' },
    { id: 3, text: 'post4' },
    { id: 4, text: 'post5' },
    { id: 5, text: 'post6' },
  ],
};

export const addPost = (postMessage) => {
  const newPost = {
    id:
      state.profilePage.posts.reduce(
        (acc, { id }) => (acc > id ? acc : id),
        0
      ) + 1,
    text: postMessage,
  };
  state.profilePage.posts.push(newPost);
};
