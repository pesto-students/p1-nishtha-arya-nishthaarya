const add = (...args) => {
  return args.reduce((a, b) => {
    return (a += b);
  }, 0);
};

const memoize = (func) => {
  const cache = {};
  return (...args) => {
    let numKeys = args.join(",");
    if (!cache[numKeys]) {
      cache[numKeys] = func.apply(this, args);
    }

    return cache[numKeys];
  };
};

const memoizedAddFunction = memoize(add);

console.log(memoizedAddFunction(3, 2));
