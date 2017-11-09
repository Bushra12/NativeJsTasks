function countWords(str) {
    return str
        .split(/\s+/)
        .filter(function (text) { return text != '' })
        .length;
} 
