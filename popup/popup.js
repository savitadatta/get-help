document.querySelector("#getHelp")
    .addEventListener('click', () => {
        document.getElementById("results").innerHTML = "";
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0]?.id,
                { text: "getHelp" }
            );
        });
    });

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.from === "getHelp") {
        document.getElementById("results").innerHTML
            += `<a class="button" href="${msg.text}" target="_blank">${msg.text}</a>`;
    }
});