/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3] */

export const removeDuplicates = (nums: number[]): number[] => {
    let filtered: number[] = []
    for (let i: number = 0; i < nums.length; i++) {
        if (!(nums[i] === nums[i + 1])) {
            filtered.push(nums[i + 1])
        }
    }
    return filtered
}

console.log(removeDuplicates([1, 1, 3, 2, 1, 3, 4, 5, 1]))
