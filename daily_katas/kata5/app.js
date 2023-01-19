const numInStr = (array) => {
    let temp = []
    let temp2 = ""
    for (let i = 0; i < array.length; i++) {
        temp2 = array[i].split(' ').join('')
        for (let j = 0; j < temp2.length; j++) {
            if (!isNaN(temp2[j])) {
                temp.push(array[i])
                break
            }
        }
    }
    return temp
}

console.log(numInStr(["1a", "a", "2b", "b"])) //["1a", "2b"]
console.log(numInStr(["abc", "abc10"])) // ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])) // ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])) // ["test1"]
console.log(numInStr(["who needs numbers", "not me"])) // []
console.log(numInStr(["who needs22 numbers", "not me11"])) //['who needs22 numbers', 'not me11']
console.log(numInStr(["!!", "##", "@"])) // []