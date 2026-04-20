export function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
export function setProgress(foundPairs, totalPairs) {
    const progressText = document.getElementById("progressText");
    const progressBar = document.getElementById("progressBar");
    let percent = 0;
    if (totalPairs > 0)
        percent = (foundPairs / totalPairs) * 100;
    progressText.innerText = String(Math.ceil(percent));
    progressBar.style.width = percent + "%";
}
//# sourceMappingURL=utils.js.map