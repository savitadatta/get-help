chrome.runtime.onMessage.addListener((msg) => {
    if (msg.text === "getHelp") {
        var links = document.getElementsByTagName("a");
        var sent = [];

        for (let link of links) {
            var name = link.textContent || link.innerText;

            if (name.toLowerCase().includes("about") || name.toLowerCase().includes("help")
                    || link.href.includes("about") || link.href.includes("help")) {
                if (!sent.includes(link.href)) {
                    chrome.runtime.sendMessage({
                        from: "getHelp",
                        text: link.href
                    });
                    sent.push(link.href);
                }
            }
        }   
    }
});