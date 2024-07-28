function sumArr(arr) {
    let addNum = 0;
    for (let i = 0; i < arr.length; i++) {
        addNum = addNum + arr[i]
    }
    return addNum
}
console.log(sumArr([1, 2, 3, 4, 5,]))