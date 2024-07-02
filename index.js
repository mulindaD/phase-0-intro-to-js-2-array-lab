// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

// function destructivelyAppendCat(name) {
//     return cats.push(name)
// }
// Refactoring the destructivelyAppendCat function to one line 
const destructivelyAppendCat = name => cats.push(name)


// function destructivelyPrependCat(name) {
//     return cats.unshift(name)
// }

const destructivelyPrependCat = name => cats.unshift(name)

const destructivelyRemoveLastCat = () => cats.pop()

// function destructivelyRemoveLastCat() {
//     return cats.pop()
// }

const destructivelyRemoveFirstCat = () => cats.shift()
// function destructivelyRemoveFirstCat() {
//     return cats.shift()
// }


// function appendCat(name) {
//     const newCats = [...cats, name]
//     return newCats
// }
const appendCat = name => [...cats, name]

const prependCat = name => [name, ...cats]
// function prependCat(name) {
//     const newCats = [name, ...cats]
//     return newCats
// }

const removeLastCat = () => cats.slice(0, -1)

// function removeLastCat() {
//     return cats.slice(0, cats.length - 1)
// }

const removeFirstCat = () => cats.slice(1)
// function removeFirstCat() {
//     return cats.slice(1)
// }