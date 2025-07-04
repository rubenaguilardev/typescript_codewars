/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */


export class Kata {
  static highAndLow = (numbers: string): string => {
    const numArr = numbers.split(' ').map(Number)
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`
  }
}

console.log(Kata.highAndLow('9 3 -5 42 33 2 6 0'))