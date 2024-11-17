function reverseString(text){
    let result = ""
    for(let i = 0; i < text.length; i++){
        result += text.charAt((text.length - 1) - i)
    }

    return result
}

module.exports = {reverseString}