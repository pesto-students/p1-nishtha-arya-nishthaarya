let obj = { num: 7 };

let addNums = function (a, b) {
  return (this.num = this.num + a + b);
};

// CALL

addNums.call(obj, 2, 5);

// APPLY

let arr = [1, 4];

addNums.apply(obj, arr);

// BIND

let boundFunc = addNums.bind(obj)
boundFunc(3, 6)