const vending = (d) => {
    d = d.map(x=>+x)
    if(d.every(e=>[20,40].indexOf(e)>-1)){
        let r  = d.reduce((s, a) => s + a, 0)%60
        return (r===0)? "Success! you have bought "+d.reduce((s, a) => s + a, 0)/60+" ice cream": "reject! Cash overflow!"
    } else {
        return "reject! Invalid input value"
    }
}

console.log(vending(process.argv.slice(2)))