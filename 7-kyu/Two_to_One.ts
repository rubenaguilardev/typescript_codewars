/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */


export const longest = (s1: string, s2: string): string => {
    const letterArr = [...s1, ...s2]
    const set = new Set(letterArr)
    return [...set].sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))