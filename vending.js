const vending = (d) => {
    return (d.reduce((s, a) => s + a, 0)===60)? true: false
}

console.log(vending([20, 20, 40]))