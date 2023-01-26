const happyAlgorithm = (number) => {
    let x = number.toString()
    let list = []
    let temp = 0

    for (let i = 1; i <= 25; i++) {
        for (let j = 0; j < x.length; j++) {
            temp += Math.pow(x[j], 2)
        }
        x = temp.toString()
        if (x == 1) {
            return "Happy " + i
        }
        if (i > 25 || list.includes(x) || x == number) {
            return "Sad " + i
        }
        list.push(x)
        temp = 0
    }
    return "Sad " + i
}

console.log(happyAlgorithm(139)) // Happy 139
console.log(happyAlgorithm(1)) // Happy 1
console.log(happyAlgorithm(89)) // Sad 8
console.log(happyAlgorithm(67)) // Sad 10
console.log(happyAlgorithm(44)) // Happy 4