export default (minp, maxp) => {
  const min = Math.ceil(minp);
  const max = Math.floor(maxp);
  return Math.round(Math.random() * (max - min) + min);
};
