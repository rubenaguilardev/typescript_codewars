// Write a function which calculates the average of the numbers in a given array.


export const findAverage = (array: number[]): number => {
  if (array.length === 0) {
    return 0
  }else {
    return array.reduce((num, nextNum) => num + nextNum) / array.length
  } 
}

