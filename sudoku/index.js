function isValidSudoku(board) {
    var seen = new Set();
    for (var i = 0; i < 9; ++i) {
        for (var j = 0; j < 9; ++j) {
            var number = board[i][j];
            if (number !== ".") {
                var rowKey = number + " in row " + i;
                var colKey = number + " in column " + j;
                var blockKey = number + " in block " + Math.floor(i / 3) + "-" + Math.floor(j / 3);
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(blockKey)) {
                    return false;
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(blockKey);
            }
        }
    }
    return true;
}
