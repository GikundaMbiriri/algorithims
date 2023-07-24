function canConstruct(magazine, ransomNote) {
    var mp = new Map();
    for (var i = 0; i < ransomNote.length; i++) {
        var char = ransomNote.charAt(i);
        mp.set(char, (mp.get(char) || 0) + 1);
    }
    for (var i = 0; i < magazine.length; i++) {
        var char = magazine.charAt(i);
        if (mp.get(char) && mp.get(char) > 0) {
            mp.set(char, mp.get(char) - 1);
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(canConstruct("aa", "aab"));
