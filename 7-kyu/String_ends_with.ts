/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */


export const solution = (str: string, ending: string): boolean => (
    str.endsWith(ending)
)

