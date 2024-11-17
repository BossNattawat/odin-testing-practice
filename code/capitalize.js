function capitalize(text){

    let remainText = text.slice(1)
    let firstLetter = text[0].toUpperCase()

    return firstLetter + remainText

}

module.exports = { capitalize };