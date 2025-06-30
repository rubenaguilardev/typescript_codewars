// Complete the square sum function so that it squares each number passed into it and then sums the results together.

export const squareSum = (numbers: number[]): number => {
  const squared = numbers.map(num => num * num)
  return squared.length > 0 ? squared.reduce((squaredNum, nextNum) => squaredNum + nextNum) : 0
}