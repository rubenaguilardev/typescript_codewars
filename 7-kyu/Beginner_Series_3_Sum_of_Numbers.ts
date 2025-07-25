/* Description:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number. */


export const getSum = (a: number, b: number): number => {
    let numArr: number[] = []
    const start = a > b ? b : a
    const end = a > b ? a : b
    for (let i = start; i <= end; i++) {
        numArr.push(i)
    }
    return numArr.reduce((num, nextNum) => num + nextNum)
}

