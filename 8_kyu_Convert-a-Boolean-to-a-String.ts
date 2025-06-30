// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


export const hello = (name:string = 'world'):string => (
    !name ? 'Hello, World!' :
    `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`
)

console.log(hello(''))