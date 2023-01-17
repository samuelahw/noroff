const bestFriend = (sentence, firstLetter, secondLetter) => {
    let temp = sentence[0]
    for (let i = 1; i < sentence.length; i++) {
        if (temp === firstLetter) {
            if (sentence[i] !== secondLetter) {
                return false
            }
        }
        temp = sentence[i]
    }
    return true
}

console.log(bestFriend("he headed to the store", "h", "e")) //true
console.log(bestFriend("i found an ounce with my hound", "o", "u")) //true
console.log(bestFriend("we found your dynamite", "d", "y")) //false