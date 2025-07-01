// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

export const digitize = (n: number): number[] => {
    return String(n).split('').reverse().map(numString => Number(numString))
}

console.log(digitize(1234))