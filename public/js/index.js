let typed = "";
let attempts = 0;
let currentRowNum = 0;
let currentColNum = 0;

function isLetterKey(key) {
    return /^[a-zA-Z]$/.test(key);
}

function getLetterBox(row, col) {
    return document.getElementById(`lb-${row}-${col}`);
}

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (isLetterKey(key) && currentColNum <= 4) {
        let letterBox = getLetterBox(currentRowNum, currentColNum);
        letterBox.textContent = key.toUpperCase();
        currentColNum++;
        letterBox.style.transform = "scale(1.1)";
        letterBox.style.borderColor = "grey";
        setTimeout(() => {
            letterBox.style.transform = "none";
        }, 100);

        typed += key.toUpperCase();

    } else if (key === "Backspace") {
        if (currentColNum !== 0) {
            currentColNum--;
        }
        let letterBox = getLetterBox(currentRowNum, currentColNum);
        letterBox.textContent = "";
        letterBox.style.borderColor = "rgba(132, 130, 130, 0.5)";

        typed -= key.toUpperCase();

    } else if (key === "Enter") {

    }
});