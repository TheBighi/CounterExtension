// made to run in background

chrome.storage.local.get(["count"], (result) => {
    currentCount = result.count ?? 0;
    CheckURL();
});

function SetCount(NewCount){
    currentCount = NewCount;
    chrome.storage.local.set({ count: currentCount });
}

function CheckURL() {
    const url = window.location.href
    const match = url.match(/chapter-(\d+)/)
    if (match) {
        const chapter = parseInt(match[1], 10);
        if (chapter > currentCount && chapter < currentCount + 2){
            SetCount(chapter)
        }
    }
}