const limitStr = (str) => {
  if (str.length > 140) {
    return `${str.slice(0, 140)}...`;
  }

  return str;
};

export default limitStr;
