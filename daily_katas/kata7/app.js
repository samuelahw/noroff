const howUnlucky = (year) => {

    let count = 0

    for (let i = 0; i < 12; i++) {
        const d = new Date(year, i, 13);
        if (d.getDay() === 5) count++
    }

    return count
}

console.log(howUnlucky("2020")); // 2
console.log(howUnlucky("2026")); // 3
console.log(howUnlucky("2016")); // 1
console.log(howUnlucky("2019")); // 2
console.log(howUnlucky("2023")); // 2