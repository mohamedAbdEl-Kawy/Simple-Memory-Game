function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function setProgress(foundPairs, totalPairs) {
    const progressText = document.getElementById("progressText");
    const progressBar = document.getElementById("progressBar");
    progressText.innerText = foundPairs + " / " + totalPairs;
    let percent = 0;
    if (totalPairs > 0)
        percent = (foundPairs / totalPairs) * 100;
    progressBar.style.width = percent + "%";
}
export {};
//# sourceMappingURL=helperFunctions.js.map