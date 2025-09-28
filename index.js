const DecreaseBTN = document.getElementById("DecreaseBTN")
const IncreaseBTN = document.getElementById("IncreaseBTN")
const CountOutput = document.getElementById("Count")
const MangaPage = document.getElementById("LinkToManga")

const CSMLink = "https://chainsawmann.com/manga/chainsaw-man-chapter-"

// init
chrome.storage.local.get(["count"], (result) => {
    currentCount = result.count ?? 0;
    UpdateUI(currentCount);
});

function SetCount(NewCount){
    currentCount = NewCount;
    chrome.storage.local.set({ count: currentCount });
}

function UpdateUI(NewCount){
    CountOutput.textContent = "Chapter: " + NewCount;
    MangaPage.setAttribute("href",CSMLink + NewCount)
}

DecreaseBTN.onclick = function() {
    SetCount(currentCount - 1)
    console.log("Decrease");
    UpdateUI(currentCount);
}

IncreaseBTN.onclick = function() {
    SetCount(currentCount + 1)
    console.log("Increase");
    UpdateUI(currentCount);
}

function GetCurrentURL() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      resolve(tabs[0].url);
    });
  });
}
async function CheckURL(){
    const url = await GetCurrentURL()
    const match = url.match(/chapter-(\d+)/);
    const chapter = parseInt(match[1], 10);
    if (currentCount < chapter < currentCount + 2){
        SetCount(chapter)
        UpdateUI(chapter)
    }
}
CheckURL()