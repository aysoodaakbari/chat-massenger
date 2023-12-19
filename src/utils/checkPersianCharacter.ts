const checkPersianCharacters = (value: string) => {
  const isPersianValue = /^[\u0600-\u06FF\s]+$/.test(value);
  if (isPersianValue) return true;
  else return false;
};

export default checkPersianCharacters;
