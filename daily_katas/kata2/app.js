function consecutiveSumCheck(n) {

    let sum = 0;
    let isConsecutive = false
    let stringOfConsecutiveNumbers = n + " is sum of these consecutive numbers:"


    //first loop iterating through 1 => parameter n - 1
    for (let i = 1; i < n; i++) {
        //second loop iterating through consecutive numbers starting from i => parameter n - 1
        for (let j = i; j < n; j++) {
            sum += j
            stringOfConsecutiveNumbers += " " + j + " "
            if (sum === n) {
                isConsecutive = true
                console.log(stringOfConsecutiveNumbers)
            }
        }
        stringOfConsecutiveNumbers = n + " is sum of these consecutive numbers:"
        sum = 0
    }
    return isConsecutive
}

console.log(consecutiveSumCheck(9))
console.log(consecutiveSumCheck(10))
console.log(consecutiveSumCheck(64))