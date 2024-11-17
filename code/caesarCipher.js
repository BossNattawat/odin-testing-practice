function caesarCipher(text, cipher) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= "A" && char <= "Z") {
            result += String.fromCharCode((char.charCodeAt(0) - 65 + cipher) % 26 + 65);
        } else if (char >= "a" && char <= "z") {
            result += String.fromCharCode((char.charCodeAt(0) - 97 + cipher) % 26 + 97);
        } else {
            result += char;
        }
    }

    return result;
}

module.exports = { caesarCipher }