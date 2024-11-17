function analyzeArray(arr){

    if(!Array.isArray(arr) || arr.length === 0){
        return "Input must be array"
    }

    if(!arr.every((item) => typeof item === "number")){
        return "All elements in the array must be numbers"
    }

    let average = 0
    let length = arr.length
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let sum = 0
    for(let item of arr){
        sum += item
    }

    average = sum / length

    return {average, min, max, length}
}

module.exports = {analyzeArray}