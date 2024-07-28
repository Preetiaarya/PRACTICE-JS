function capitalize(str) {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i-1] === " ") {
            newstr += str[i].toUpperCase();
        }
        else{
            newstr += str[i]
        }
    }
    return newstr
}
console.log(capitalize("I love cats"))

