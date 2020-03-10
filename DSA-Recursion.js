/*1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.*/

/*What is the input to the program? (num)
What is the output of the program?  (All sheep jumped over the fence)
What is the input to each recursive call? (num - 1)
What is the output of each recursive call? (Another sheep jumps over the fence)*/

console.log('Count Sheep')

const countSheep = (num) => {
    // Base case
    if (num === 0) {
    return  console.log('All sheep jumped over the fence');
    }
    // General case
    else {
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num - 1);}

}

let num = 3;
countSheep(num);


/*2. Power Calculator
Write a function called powerCalculator() that takes two parameters, a
n integer as a base, and another integer as an exponent. The function returns the value of the 
base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)*/

/*What is the input to the program? (baseInt, exp)
What is the output of the program?  (if 0 = 1)
What is the input to each recursive call? (exp - 1)
What is the output of each recursive call? (baseInt ^ exp-1)*/

console.log('Power Calculator')

const powerCalculator = (base, exponent) => {
    if (exponent < 0) {
      return "exponent should be >= 0";
    }
    // Base
    if (exponent === 1) {
      return base;
    }
  
    return base * powerCalculator(base, exponent - 1);
  };

  console.log(powerCalculator(10,2));
  console.log(powerCalculator(10,-2));

/*3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.*/

/*What is the input to the program? (string)
What is the output of the program?  ()
What is the input to each recursive call? (exp - 1)
What is the output of each recursive call? (baseInt ^ exp-1)*/
console.log('Reverse String')

reverseString = (str) => {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }

console.log(reverseString("hello"));
console.log(reverseString(""));

/*4. nth Triangular Number
Calculate the nth triangular number. 
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45..*/

/*What is the input to the program? (string)
What is the output of the program?  ()
What is the input to each recursive call? (exp - 1)
What is the output of each recursive call? (baseInt ^ exp-1)*/
console.log('Triangle Number')

const triNum = (n) => {
    //base case
    if (n === 1) {
      return n;
    }
    //general case
    return n + triNum(n - 1);
  };
  
  console.log('First triangle number is ' + triNum(1));
  console.log('Second triangle number is ' + triNum(2));
  console.log('Third triangle number is ' + triNum(3));
  console.log('Fourth triangle number is ' + triNum(4));
  console.log('Fifth triangle number is ' + triNum(5));

  /*5. String Splitter
  Write a recursive function that splits a string based on a separator 
  (similar to String.prototype.split). Don't use JS array's split function to solve this problem.*/

/*What is the input to the program? (20/20/2020)
What is the output of the program?  ()
What is the input to each recursive call? (exp - 1)
What is the output of each recursive call? ([20, 20, 2020])*/

console.log('String Splitter')

stringSplitter = (string, separator) => {
  // base case
  if (string.length === 0) {
      return '';
      // general cases
  } else if (string[0] === separator) {
      return stringSplitter(string.slice(1), separator);
  } else {
      return string[0] + stringSplitter(string.slice(1), separator);
  }
}

console.log(stringSplitter('02/20/2020', '/')) // 02202020


/*6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the 
2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.*/
console.log('Fibonacci Numbers')

fibonacci = (num) => {
  if (num === 1){
    return 1
  }
  else if (num === 2) {
     return 1
  }
  else{
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

}

console.log(fibonacci(7));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(20));

/*7. Factorial
Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each 
number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.*/

console.log('Factorials')
factorial = (num) => {
if (num === 1){
  return 1
}
{
  return num * factorial(num -1)
}
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

/*8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. 
There are more than one possible paths through the Maze to 
the single exit point. Write a recursive function that will help you find a possible path though the maze.
*/

console.log('Maze Solver')

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

solver = (maze) =>{

 this.maze = maze

  this.findPath = function (col, row){
    if (maze[col][row] === 'e'){
      console.log('Exit reached at ' + col + ' and ' + row)
    } 
    else if (maze[col][row] === ' '){
      maze[col][row] = 1;
      if (col < maze[col].length - 1){
        console.log('R');
        this.findPath(maze, (col + 1), row);
      }
      if (row < maze[col].length - 1){
        console.log('L');
        this.findPath(maze, col, (row + 1));
      }
      if (col > 0){
        console.log('D');
        this.findPath((col - 1), row);
      }
      if (row > 0){
        console.log('U');
        this.findPath(maze, col, (row - 1));
      }
    }
  }
}

/*10. Anagrams
An anagram is any word or phrase that uses the letters 
of a given ("subject") word or phrase in another, rearranged order. 
Write a function that creates an anagram list, listing all the rearrangements 
of a given word. For example, if the user types "east", the program should list 
all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a 
prefix and use that to create the new words. For example, given 
"east", use "e" as a prefix and place it in front of all 6 permutations 
of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you 
the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue 
this way until you find all the anagrams for "east". Then you can use "a" 
as a prefix and permute the remaining words "est". For "east", there should be 24 words.*/

console.log('anagrams')
function anagrams(prefix, str) {
  if (str.length <= 1) {
      console.log(prefix + str);
  }
  else {
      for (let i = 0; i < str.length; i++) {
          const current = str.substring(i, i + 1);
          const before = str.substring(0, i);
          const after = str.substring(i + 1);
          anagrams(prefix + current, before + after);
      }
  }
};

anagrams('', 'east')



/*11. Organization Chart
Write a recursive function that prints the 
following organization chart. Your output should be
 as shown below with proper indentation to show the hierarchy. 
 You may store the org chart in an object and send that as an input to your program.*/

 console.log('org chart')
const org = [
  {id: 'Zuckerberg', boss: null},
  {id: 'Schroepfer', boss: 'Zuckerberg'},
  {id: 'Schrage', boss: 'Zuckerberg'},
  {id: 'Sandberg', boss: 'Zuckerberg'},
  {id: 'Bosworth', boss:'Schroepfer' },
  {id: 'Zhao', boss:'Schroepfer' },
  {id: 'Steve', boss:'Bosworth' },
  {id: 'Kyle', boss:'Bosworth' },
  {id: 'Andra', boss:'Bosworth' },
  {id: 'Richie', boss: 'Zhao'},
  {id: 'Sofia', boss: 'Zhao'},
  {id: 'Jen', boss: 'Zhao'},
  {id: 'VanDyck', boss:'Schrage' },
  {id: 'Swain', boss:'Schrage' },
  {id: 'Sabrina', boss:'VanDyck' },
  {id: 'Michelle', boss:'VanDyck' },
  {id: 'Josh', boss:'VanDyck' },
  {id: 'Blanch', boss:'Swain' },
  {id: 'Tom', boss:'Swain' },
  {id: 'Joe', boss:'Swain' },
  {id: 'Goler', boss:'Sandberg' },
  {id: 'Hernandez', boss:'Sandberg' },
  {id: 'Moissinac', boss:'Sandberg' },
  {id: 'Kelley', boss:'Sandberg' },
  {id: 'Eddie', boss:'Goler' },
  {id: 'Julie', boss:'Goler' },
  {id: 'Annie', boss:'Goler' },
  {id: 'Rowi', boss:'Hernandez'},
  {id: 'Inga', boss:'Hernandez'},
  {id: 'Morgan', boss:'Hernandez'},
  {id: 'Amy', boss:'Moissinac'},
  {id: 'Chuck', boss:'Moissinac'},
  {id: 'Vinni', boss:'Moissinac'},
  {id: 'Eric', boss:'Kelley'},
  {id: 'Ana', boss:'Kelley'},
  {id: 'Wes', boss:'Kelley'},
];

function organize(org, boss) {
  let node = {};

  org
    .filter(item => item.boss === boss)
    .forEach(item => node[item.id] = organize(org, item.id));
  return node;  
}

console.log(JSON.stringify(organize(org, null)));


/*12. Binary Representation
Write a recursive function that prints out the binary 
representation of a given number. For example, the program should take 
3 as an input and print 11 as output, or 25 as an input and print 
11001 as an output. Note that the binary representation of 0 should be 0.
*/


console.log('decBinary')
decToBi = (num) =>{ 
  if(num === 0){
    return 0
  }
  else
  {
    return num % 2 + 10 * decToBi(Math.floor(num / 2));
  
  }
}

console.log(decToBi(3));
console.log(decToBi(25));
