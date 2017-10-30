function countWords(str) {
    var count = 0;
    words = str.split(" ");
    for (i = 0; i < words.length; i++) {
        if (words[i] != "")
            count += 1;
    }
    return count;
}