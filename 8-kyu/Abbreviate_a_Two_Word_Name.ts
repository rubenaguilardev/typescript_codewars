/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */


export const abbrevName = (name: string): string => {
    const namesArray = name.split(' ')
    return `${namesArray[0][0]}.${namesArray[1][0]}`
}

console.log(abbrevName('Ben Aguilar'))