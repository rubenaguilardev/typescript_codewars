/*  Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20

Note
If there is nothing to sum, the sum is default to 0. */


export const positiveSum = (arr:number[]): number => {
  const positive = arr.filter(num => num > 0)
  return positive.length > 0 ? positive.reduce((num, next) => num + next) : 0
}

console.log(positiveSum([]))