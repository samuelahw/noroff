const noStrangers = (text) => {
    const all = []
    const acquaintance = []
    const friend = []
    const seen = []

    let count = 0
    let words = text.match(/\b(\w+)\b/g)
    for (let i = 0; i < words.length; i++) {

        let currentWord = words[i].toLowerCase()

        if (seen.includes(currentWord)) {
            count = 0
            for (let j = 0; j < seen.length; j++) {
                if (seen[j] === currentWord) count++
            }
            if (count === 2) {
                acquaintance.push(currentWord)
            }
            if (count === 4) {
                friend.push(currentWord)
                acquaintance.splice(acquaintance.indexOf(currentWord), 1)
            }
        }

        seen.push(currentWord)

    }
    all.push(acquaintance)
    all.push(friend)
    return all
}

console.log(noStrangers('See Spot run. See Spot jump. Spot likes jumping. See Spot fly. Spot king. Spot see'))
console.log(noStrangers('see SEE see see see spot SPOT spot SPOT SPOT'))