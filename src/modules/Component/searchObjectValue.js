const searchObjectValue = (state, filter) => {
  const filterArr = filter.split('.');
  const hasOwn = Object.prototype.hasOwnProperty;
  let result;
  let target = state;

  for (const value of filterArr) {
    if (hasOwn.call(target, value)) {
      result = target[value];
      target = result;
    }
  }
  return result;
};

export default searchObjectValue;
