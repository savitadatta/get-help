document.querySelector("#getHelp")
    .addEventListener('click', () => {
        chrome.runtime.sendMessage({
            text: "Popup"
        });

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0]?.id,
                { text: "getHelp" }
            );
        });
    });

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.from === "getHelp") {
        document.getElementById("results").innerHTML
            += `<a class="button" href="${msg.text}">${msg.text}</a>`;
    }
});