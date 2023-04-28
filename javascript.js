// problem 1
var createCounter = function(n) {
  n-=1
  return function() {
    return n+=1
  };
};

const counter = createCounter(10)
  counter() // 10
  counter() // 11
  // console.log(counter() );// 12

// Problem 2
var moveZeroes = function(nums) {
  return nums.filter(n => n !== 0).concat(nums.filter(n => n == 0))
};

// console.log(moveZeroes([0,1,0,3,12]));

// Problem 3
var sumOfMultiples = function(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      count+=i
    }
  }

  return count
};
// console.log(sumOfMultiples(10));

// Problem 4
var getConcatenation = (nums) => nums.concat(nums)
// console.log(getConcatenation([1, 2, 3]));

// Problem 5
var buildArray = (nums) => nums.map((value, _, array) => array[value])
// console.log(buildArray([5,0,1,2,3,4]));

// Problem 6
function shuffle(nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[n+i]);
  }
  return res;
}

let nums = [2,5,1,3,4,7];
let n = 3;
// console.log(shuffle(nums, n));

// Problem 7
var finalValueAfterOperations = function(operations) {
  return operations
};
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));
