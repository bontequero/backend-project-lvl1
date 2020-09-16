export default (minp, maxp) => {
  const min = Math.ceil(minp);
  const max = Math.floor(maxp);
  return Math.floor(Math.random() * (max - min) + min);
};
