const { array, string } = require("prop-types");

console.clear();
/*
** TIME COMPLEXITY **
how we analyze the runtim of an algorithm as the size of the inputs increases?

use performance.now() before and after an alg to measure the speed

var time1 =perfomrance.now()
function...
var time2 =perfomrance.now()

then subtract the two to get the time the alg took to complete


This method is not very reliable, due to:
- diff machines will record different time
- the same machine will record different times with same alg


It is easier to count the number of operations in the alg
- the exact count is not super important, its more about the big trend

RULES
constants dont matter much
- O(2n) ~ O(N)
- O(500) ~ O(1) 
- O(12n^2) ~ O(n^2)
- O(1000n+50) ~ O(N)
- O(n^2+5n+8) ~O(n^2)


1) Arithmetic operations are constants
- 2+2 takes around the same time as 10000+10000
2) Variables assignments is constants
- y= 3000 takes around the same time as x=9999999
3) Accessign elements in an array(by index) or object(by key) is constant
4) In a loop, the complexity is the length of the loop times the complexity of
whatever the loop has in it


** SPACE COMPLEXITY **
How much additional memory do we need to allocate in order to run the code in our algorithm?

input = N 

auxilary space complexity: space required by the algorithm, not
including space taken up by the inputs

- primitives(booleans,numbers,undefined,null) are constant space
- strings require O(N) space, where n is the string length
- reference types are generally O(N), where n is the length (for arrays) or the number of keys (for objects)


--BUILT IN DATA STRUCTURES--

**OBJECTS**
- unorder key value pairs

**Big O of Objects**
insertion,Removal,Access : O(1)
Search : 0(N)
NOTE: if you dont need ordering, objects are the way to go!

**Big O of Object Methods**
Object.keys, Object.values, Object.entries : O(N)
hasOwnProperty : O(1)


**ARRAYS**
- ordered lists

**Big O of arrays**
insertion, removal : it depends on where the action is
access: O(1)
searching : O(N)

- adding to the end of an array is easy: O(1)
- adding/removing to the beggining of the array requires a shift in the index
to all the elements: O(N)


**Big O of array operations**
O(1)
-push
-pop

O(N)
-shift
-unshift
-slice
-splice
-forEach/map/filter/reduce/etc 

O(N+M)
-concat

O(N*log(N))
-sort



OTHER FUNCTIONS TO KNOW
indexOf
splice




-- ALGORITHMS AND PROBLEM SOLVING PATTERNS --
(1) understand the problem
can i restate the problem in my own words?
what are the inputs? (consider types, limits/bounds/edge cases, missing values)
what are the outputs?
do i have enough info to solve the problem?
how should i label the inportant pieces of data?

(2) exploring examples
user stories
unit tests
examples with bad inputs, empty inputs

(3) Break down the problem
write the steps to achieve the goal

(4) solve/simplify

(5) look for improvements
can you check the result
can you improve the performance
can you derive the result differently
how have others solved this problem
does it follow best practices / company guidelines


PROBLEM PATTERNS
-frequency counter
-multiple pointes
-sliding window
-divide and conquer
-dynamic programming
-greedy algorithms
-backtracking
-more!




FREQUENCY COUNTERS

*/

// const anagrams = (str1, str2) => {
//   //check the lenghts, if the arent the same return false
//   if (!str1.length == str2.length) {
//     return false;
//   }

//   // make everything lowercase
//   const _str1 = str1.toLowerCase();
//   const _str2 = str2.toLowerCase();

//   // find the letter count in str1
//   const frequency1 = {};
//   const frequency2 = {};

//   for (char of _str1) {
//     frequency1[char] = (frequency1[char] || 0) + 1;
//   }

//   for (char of _str2) {
//     frequency2[char] = (frequency2[char] || 0) + 1;
//   }

//   for (key in frequency1){
//     if(frequency2[key]!==frequency1[key]){
//         return false
//     }
//   }
//   console.log("frequency1: ", frequency1);
//   console.log("frequency2: ", frequency2);
//   return true;
// };
// console.log(anagrams('texttwisttime','timetwisttext'));

/*
MULTIPLE POINTERS
Creating pointers or values that correspond to an index or position
and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity


*/

// const countUniqueValues = (array) => {
//   let left = 0;
//   let right = array.length - 1;
//   let unique = {};
//   let count = 0;
//   while (right > left) {
//     let leftValue = array[left];
//     let rightValue = array[right];
//     unique[leftValue] ? null : (unique[leftValue] = 1);
//     unique[rightValue] ? null : (unique[rightValue] = 1);
//     left++;
//     right--;
//   }
//   for (ele in unique) {
//     count++;
//   }
//   return count;
// };

// console.log(countUniqueValues([-2,-1,-1,0,1]));

/*
SLIDING WINDOW
This pattern involces creating a window which can either be an array
or number from one position to another.

Depending on certain conditions, the window either increases or closes
(and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc.


DIVIDE AND CONQUER
This pattern involves dividing a data set into smaller chucnks and
then repeating a process with a subset of data.
This pattern can TREMENDOUSLY DECREASE TIME COMPLEXITY

*/

// const sameFrequency = (num1, num2) => {
//   if (num1.length !== num2.length) {
//     return false;
//   }
//   const str1 = num1.toString();
//   const str2 = num2.toString();

//   const str1NumCount = {};
//   const str2NumCount = {};
//   for (let num of str1) {
//     str1NumCount[num]
//       ? (str1NumCount[num] = str1NumCount[num] + 1)
//       : (str1NumCount[num] = 1);
//   }
//   for (let num of str2) {
//     str2NumCount[num]
//       ? (str2NumCount[num] = str2NumCount[num] + 1)
//       : (str2NumCount[num] = 1);
//   }

//   for (let key in str1NumCount) {
//     if (str1NumCount[key] !== str2NumCount[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(sameFrequency(182, 281));

// function areThereDuplicates() {
//   const frequency = {};
//   for (let val of arguments) {
//     frequency[val] ? (frequency[val] += 1) : (frequency[val] = 1);
//   }
//   console.log(frequency);
//   for (let key in frequency) {
//     if (frequency[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(areThereDuplicates('a','b','c','a'));

// function averagePair(array, avg) {
//   let pointer1 = 0;
//   let pointer2 = pointer1 +1;
//   const arrayLenght = array.length;
//   let avgOfPair = 0;

//   while (pointer1 < arrayLenght) {
//     avgOfPair = (array[pointer1] + array[pointer2])/2;
//     if(pointer2>arrayLenght){
//       return false
//     }
//     if (avgOfPair == avg) {
//       return true;
//     }
//     pointer2++;

//     if(pointer2==arrayLenght-1){
//       pointer1++;
//       pointer2=pointer1+1;
//     }

//   }
//   return false
// }
// console.log(
//   averagePair([], 4.1)
// )
// 1 2 3 4 5
//   i       j

// find all subsequce strings
// function isSubsequence(str1, str2) {
//   if (str1.length > str2.length) {
//     return false;
//   }

//   while( str2.indexOf(str1)){

//   }
// }

// console.log(isSubsequence("sing", "sting"));

// function maxSubarraySum(array, numOfElements) {
//   if (numOfElements > array.length) {
//     return null;
//   }
//   let start = 0;
//   let end = numOfElements;
//   let localArray = [];
//   let localMax = 0;
//   let maxArray = [];
//   let globalMax = -Infinity;

//   // find the local max
//   while (start != array.length - numOfElements + 1) {
//     for (let i = start; i < end; i++) {
//       localArray.push(array[i]);
//       localMax = localMax + array[i];
//     }
//     console.log("localArray:  ", localArray);
//     console.log("localMax:  ", localMax);
//     if (localMax > globalMax) {
//       globalMax = localMax;
//       maxArray = [...localArray];
//     }
//     localArray = [];
//     localMax = 0;
//     console.log("maxArray: ", maxArray);
//     console.log("globalMax:  ", globalMax);

//     start++;
//     end++;
//   }
//   return globalMax;
// }

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410608#questions
// FAILED

/*
RECURSION
a function that calls itself until it reaches the base case

- HELPER METHOD RECURSION

- PURE RECURSION


*/

// function power(base, POWER) {
//   if(POWER==0){
//     return 1
//   }
//   console.log("base: ", base);
//   console.log("power: ", POWER);
//   if (POWER == 1) {
//     return base;
//   }

//   return power(base * 2, POWER - 1);
// }

// console.log(power(2, 4));

// function factorial(NUM) {
//   if(NUM==0){return 1}
//   let carry = 1;
//   //
//   function FACT(num) {
//     if (num == 1) {
//       return carry;
//     }
//     carry = carry * num;
//     return FACT(num - 1);
//   }
//   //
//   return FACT(NUM);
// }
// console.log(factorial(7));

// function productOfArrays(arr) {
//   let carry = 1;
//   function pp(ARR) {
//     if (ARR.length > 0) {
//       carry = carry * ARR[0];
//       ARR.splice(0, 1);
//       pp(ARR);
//     }
//     return carry;
//   }
//   return pp(arr);
// }
// console.log(productOfArrays([1, 2, 3, 10]));

// function recursiveRange(NUM) {

//   let sum = 0;
//   function helper(num) {
//     if(num==0){
//       return sum;
//     }
//     sum = sum + num;
//     helper(num - 1);
//   }
//   helper(NUM);
//   return sum;
// }

// console.log(recursiveRange(10));

// function fib(stopNumber) {
//   let fibArray = [1, 1, 2];
//   function helper() {
//     if (fibArray.length > stopNumber) {
//       return;
//     }
//     let lastValue = fibArray[fibArray.length - 1];
//     let secondLastValue = fibArray[fibArray.length - 2];
//     fibArray.push(lastValue + secondLastValue);
//     helper();
//   }
//   helper();
//   return fibArray[stopNumber - 1];
// }

// console.log(fib(10));

// HARD https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425976#questions

// function reverse(string) {
//   let reverseString = [];
//   // add first letter to reverseString
//   // remove the first letter from string
//   // redo

//   function helper() {
//     reverseString.unshift(string[0]);
//     string=split()
//     //
//   }
//   helper();
// }

/*
--SEARCH ALGORIGHTMS!--
- linear
- binary
- native string
- kmp


LINEAR SEARCH
- used in not sorted data sets
*/

// function linearSearch(array, value) {
//   for (key in array) {
//     // console.log("array[key]:  ", array[key]);
//     // console.log("value: ", value);
//     // console.log( typeof key)
//     if (array[key] == value) {
//       return parseInt(key);
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([10, 15, 20, 25, 30], 15));

/*
BINARY SEARCH aka DIVIDE AND CONQUER
- very fast
- only works on sorted data


NAIVE STRING SEARCH



*/

// const str = "hellow";
// console.log(str.indexOf("ellx"));
// // SIZE=5
// // 0 1 2 3 4  INDEX
// // h o u s e
// // x
// // i
// // se

// function findString(masterString, targetString) {
//   let masterLength = masterString.length;
//   let targetLength = targetString.length;
//   let matchCounter = 0;
//   let matchArray = [];
//   // loop over targetString
//   // loop over masterString

//   // CASE 1
//   // check the character of each
//   for (let M = 0; M <= masterLength; M++) {
//     for (let T = 0; T <= targetLength; T++) {
//       // if there is a match, move both pointers up
//       if (masterString[M] == targetString[T]) {
//         matchCounter++;
//         M++;

//         if (matchCounter == targetLength) {
//           // if there is a full match, return the index
//           // reset the targetString
//           // move up masterString
//           matchCounter = 0;
//           matchArray.push(M - (targetLength ));
//           break;
//         }
//         // repeat
//         continue;
//       }

//       // CASE 2
//       // if there is no match, reset the targetString pointer
//       // move the masterString pointer up
//       matchCounter = 0;
//       break;
//     }
//   }
//   console.log(matchArray)
// }
// findString("lourie loled", "lol");

/*
ELEMENTARY ALG   space complexity:O(1)
-bubble sort: 
--performs well with sorted data
-selection sort : 
--speed independed if data is sorted or not
-insertion sort: 
-- great for live database that has already sorted data

how they all compare: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11071978#questions







INTERMEDIATE ALG
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344164#questions


-merge sort
O explanation: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072020#questions/12120650
-- does not care if data is sorted

-quick sort
O explanation: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072084#notes
- best for unsorted data
- worst if u pick the smallest number first




comparing sorts: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344146#notes



DATA STRUCTURES!
class: blue print for creating objs with pre-defined props and methods
- constructor().... what default properties should the instantiated
obj have?
- inside of a constructor: 'this' refers to the instantiated obj
- methods()... what should the instantiated obj be able to do?
- static methods: often used to create utility functions for an
appplication. (something that relates to all instances, not a parti
  cular instance )
- starts with capital letter


-- SINGLY LINKED LISTS --
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344202#notes

what is a linked list?
-contains HEAD, TAIL, and LENGTH
-consists of nodes, 
-each NODE has a VALUE and a POINTER to 
another node or null

Comparisons with Arrays
*Linked Lists
-dont have indexes
-connect via node with a NEXT pointer
-random access aint allowed
-good at insertion/deletion

*Arrays
-indexed in order
-insertion and deletion can be expensive
-can quickly be accessed at a specific index
-bad at insertion/deletion

*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SingleLinkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   shift() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     this.head = temp.next;
//     this.length--;
//     return temp;
//   }

//   unshift(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let counter = 0;
//     let current = this.head;
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNote.val = val;
//       return true;
//     }
//     return false;
//   }

//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return !!this.push(val);
//     if (index === 0) return !!this.unshift(val);
//     //
//     let newNode = new newNode(val);
//     let prev = this.get(index - 1);
//     let temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === 0) return this.shift(); // removes first ele
//     if (index == this.lenght - 1) return this.pop();
//     let previousNode = this.get(index - 1);
//     let removed = previousNode.next;
//     previousNode.next = removed.next;
//     this.length--;
//     return removed;
//   }
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let next;
//     let prev = null;
//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
//   print() {
//     let arr = [];
//     let current = this.head;
//     while (current) {
//       arr.push(current.val);
//       current = current.next;
//     }
//     console.log(arr);
//   }
// }
// var list = new SingleLinkedList();

/*
https://www.bigocheatsheet.com/
Big O of singly linked lists
insertion: it depends...
-O(1) at end or begining 
-O(n) in the middle

removal: it depends...
-O(1) for begining
-O(N) for end
searching: O(N)
access: O(N)



Doubly Linked Lists
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344220#questions/9167898
- same linked list, exept there is a pointer to the previous node, 
- it takes more space than single linked list

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = null;
    this.tail = null;
    this.length = 0;
  }
}
let list = new DoublyLinkedList();
console.log("jere3");
console.log(list);
let first = new Node(13);
