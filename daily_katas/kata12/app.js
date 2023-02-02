const doubleLetters = (word) => {
    let temp = ""
    if (word.length < 2) return false
    for (let i = 0; i < word.length; i++) {
        if (word[i] === temp) return true
        temp = word[i]
    }
    return false
}

console.log(doubleLetters("loop"))      // true
console.log(doubleLetters("yummy"));    // true
console.log(doubleLetters("orange"));   //false
console.log(doubleLetters("munchkin")); //false