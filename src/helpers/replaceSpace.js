const replaceSpace = (str) =>
  str
    .split(" ")
    .filter((item) => item)
    .join("_");

export default replaceSpace;
