const DecreaseBTN = document.getElementById("DecreaseBTN")
const IncreaseBTN = document.getElementById("IncreaseBTN")
const CountOutput = document.getElementById("Count")
const MangaPage = document.getElementById("LinkToManga")

const CSMLink = "https://chainsawmann.com/manga/chainsaw-man-chapter-"

chrome.storage.local.get(["count"], (count) => {
    let currentCount = count.count ?? 0;
    CountOutput.textContent = currentCount;
    MangaPage.setAttribute("href",CSMLink + currentCount)

    DecreaseBTN.onclick = function(){
        currentCount--;
        CountOutput.textContent = currentCount;
        chrome.storage.local.set({count: currentCount});
        console.log("Increase")
        MangaPage.setAttribute("href",CSMLink + currentCount)
    }
    IncreaseBTN.onclick = function(){
        currentCount++;
        CountOutput.textContent = currentCount;
        chrome.storage.local.set({count: currentCount});
        console.log("Increase")
        MangaPage.setAttribute("href",CSMLink + currentCount)
    }
})

//document.getElementById("menu-item-7062").setAttribute("href", "my new link");