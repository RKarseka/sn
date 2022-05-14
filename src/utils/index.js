export const getRandomInt = (min = 0, max = 10) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomAvatar = () =>
  `../public/users/user-${getRandomInt(1, 21)}.svg`;
