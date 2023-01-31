const pigLatinSentence = (sentence) => {
    const words = sentence.split(" ")
    let pigLatin = ""
    let temp = ""

    for (let i = 0; i < words.length; i++) {
        temp = ""

        for (let j = 0; j < words[i].length; j++) {
            if (words[i][0] === "a" || words[i][0] === "e" || words[i][0] === "i" || words[i][0] === "o" || words[i][0] === "u") {
                pigLatin += words[i] + "way "
                break
            } else {
                if (words[i][j] === "a" || words[i][j] === "e" || words[i][j] === "i" || words[i][j] === "o" || words[i][j] === "u") {
                    pigLatin += words[i].slice(temp.length) + temp + "ay "
                    break
                } else {
                    temp += words[i][j]
                }
            }
        }
    }
    return pigLatin
}

console.log(pigLatinSentence("this is pig latin"))   // isthay isway igpay atinlay
console.log(pigLatinSentence("wall street journal")) // allway eetstray ournaljay
console.log(pigLatinSentence("raise the bridge"))    // aiseray ethay idgebray
console.log(pigLatinSentence("all pigs oink"))       // allway igspay oinkway