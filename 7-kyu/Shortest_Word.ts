/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */


export const findShort = (s: string): number => {
    const strLength = s.split(' ').map(word => word.length)
    return Math.min(...strLength)
}



