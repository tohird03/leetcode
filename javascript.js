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
// var finalValueAfterOperations = function(operations) {
//   let count = 0
//   operations.map(item => {
//     let removeX = item.split('X').join('')

//     if(removeX == '++') {
//       count++
//     }else {
//       count--
//     }
//   })

//   return count
// };

// console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));

// Problem 8
var numIdenticalPairs = function(nums) {
  let count = 0
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i+1; j <= nums.length; j++) {
      if(nums[i] == nums[j] && i < j) {
        count++
      }
    }
  }

  return count
};

// console.log(numIdenticalPairs([1,2,3,1,1,3]));

// Problem 9
// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts) {
  return Math.max(...accounts.map(value => value.reduce((a, b) => a + b)))
};

// console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));

// Problem 9
// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
  let arr =[]
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = 0; j <= i; j++) {
      count+=nums[j]
    }

    arr.push(count)
  }
  return arr
};
// console.log(runningSum([1,2,3,4]));

// Problem 10
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
var mostWordsFound = function(sentences) {
  return Math.max(...sentences.map(item => item.split(' ').length))
};

// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));

// Problem 11
// https://leetcode.com/problems/sort-the-students-by-their-kth-score/
function sortTheStudents(score, k) {
  const kthScores = score.map(row => row[k]);
  const sortedIndices = kthScores
    .map((_, i) => i)
    .sort((i, j) => kthScores[j] - kthScores[i]);
  const sortedScore = sortedIndices.map(i => score[i]);
  return sortedScore;
}

// console.log(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2));

// Problem 12
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
var smallerNumbersThanCurrent = function(nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if(nums[i] > nums[j]) {
        count++
      }
    }

    arr.push(count)
  }

  return arr
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));