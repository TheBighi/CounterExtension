const DecreaseBTN = document.getElementById("DecreaseBTN")
const IncreaseBTN = document.getElementById("IncreaseBTN")
const CountOutput = document.getElementById("Count")

chrome.storage.local.get(["count"], (count) => {
    let currentCount = count.count ?? 0;
    CountOutput.textContent = currentCount;

    DecreaseBTN.onclick = function(){
        currentCount--;
        CountOutput.textContent = currentCount;
        chrome.storage.local.set({count: currentCount});
        console.log("Increase")
    }
    IncreaseBTN.onclick = function(){
        currentCount++;
        CountOutput.textContent = currentCount;
        chrome.storage.local.set({count: currentCount});
        console.log("Increase")
    }
})