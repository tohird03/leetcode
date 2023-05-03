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
// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// Problem 13
// https://leetcode.com/problems/defanging-an-ip-address/
var defangIPaddr = function(address) {
  return address.split('.').join('[.]')
};

// console.log(defangIPaddr("1.1.1.1"));

// Problem 14
// https://leetcode.com/problems/goal-parser-interpretation/
var interpret = function(command) {
  return command.split("()").join('o').split("(al)").join('al')
};

// console.log(interpret("G()()()()(al)"));

// Problem 15
// https://leetcode.com/problems/shuffle-string/
var restoreString = function(s, indices) {
  return indices.map((item, index) => [item, s[index]]).sort((itemOne, itemTwo) => itemOne[0] - itemTwo[0]).map(item => item[1]).join('')
};
// console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));

// Problem 16
var sortSentence = function(s) {
  return s.split(' ').map(item => [+item.slice(-1), item.slice(0, -1)]).sort((a, b) => a[0] - b[0]).map(item => item[1]).join(' ')
};

// console.log(sortSentence("is2 sentence4 This1 a3"));

// Problem 17
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
var arrayStringsAreEqual = (word1, word2) => word1.join('') == word2.join('')

// console.log(arrayStringsAreEqual(["abc", "d", "defg"],  ["abcddefg"]));

// Problem 18
let englishWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var checkIfPangram = function(sentence) {
  return englishWord.filter((item, index) => sentence.includes(item)).length == englishWord.length
};

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

// Problem 19
// https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {
  let n = x + ''
  if(n.length % 2 == 0) {
    return n.slice(0, n.length/2) == n.slice(n.length/2).split('').reverse().join('')
  }else {
    return n.slice(0, (n.length - 1)/2) == n.slice((n + 1).length/2).split('').reverse().join('')
  }
};

// console.log(isPalindrome(10));


// Problem 20
// https://leetcode.com/problems/xor-operation-in-an-array/
var xorOperation = function(n, start) {
  let num=0
  for (let i = start; i <=start + (n-1)*2; i+=2) {
    num^=i
  }
  return num
};

// console.log(xorOperation(4, 3));

// Problem 21
var rotate = function(matrix) {
  let arr = []
  for (let i = matrix.length - 1; i >= 0; i--) {
    let arrNested = []
    matrix.forEach((item, index) => arrNested.push(item[i]))
    arr.push(arrNested.reverse())
  }

  return arr.reverse()
};

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

// Probelem 22
var maximumXOR = function(nums) {
  let xor=0
  for (let i = 0; i < nums.length; i++) {
    xor+=nums[i]
  }

  return xor
};

console.log(maximumXOR[1,2,3,9,2]);
