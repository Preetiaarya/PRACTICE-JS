function removeDuplicates(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (filter (newArray,arr[i]))
          continue;
        else
        newArray.push(arr[i])
    }
    return newArray;

}
function filter(newArray,items){
    for(let i=0; i< newArray.length; i++){
        if(newArray[i]===items)
            return true;
        else
        continue;
    }
    return false
}
console.log(removeDuplicates([2,2,4,4,5,6,]))