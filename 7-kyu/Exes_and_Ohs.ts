/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */


export const xo = (str: string): boolean => {
    let xString = str.toLowerCase().split('').filter(letter => letter === 'x').length
    let oString = str.toLowerCase().split('').filter(letter => letter === 'x').length
    return xString === oString ? true : false
}