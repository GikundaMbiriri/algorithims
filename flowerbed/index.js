function canPlaceFlowers(flowerbed, n) {
    if (n === 0) {
        return true;
    }
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            console.log(flowerbed);
            flowerbed[i] = 1;
            n--;
            if (n === 0) {
                return true;
            }
        }
    }
    return false;
}
console.log(canPlaceFlowers([0, 1, 0, 0, 0, 1], 1));
