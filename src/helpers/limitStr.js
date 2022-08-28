const limitStr = (str) => {
  if (str.length > 140) {
    return `${str.slice(0, 140)}...`;
  }

  return str;
};

// решение не очень. Посмотри на чистый css https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/
export default limitStr;
