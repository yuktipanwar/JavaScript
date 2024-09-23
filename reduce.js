const arr= [1,2,3,4,5];

const reducerFun = (acc,cur) => acc +cur;

const output = arr.reduce(reduceFun, 0);

console.log(output);