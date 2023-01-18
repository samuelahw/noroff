const replaceVowel = (str) => {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === "a") newStr += 1
        else if (str.charAt(i).toLowerCase() === "e") newStr += 2
        else if (str.charAt(i).toLowerCase() === "i") newStr += 3
        else if (str.charAt(i).toLowerCase() === "o") newStr += 4
        else if (str.charAt(i).toLowerCase() === "u") newStr += 5
        else newStr += str.charAt(i).toLowerCase()
    }
    return newStr
}

console.log(replaceVowel("karAchi")) // k1r1ch3
console.log(replaceVowel("chEmBur")) // ch2mb5r
console.log(replaceVowel("khandbari")) // kh1ndb1r3
console.log(replaceVowel("LexiCAl")) // l2x3c1l
console.log(replaceVowel("fuNctionS")) // f5nct34ns
console.log(replaceVowel("EASY")) // 21sy






