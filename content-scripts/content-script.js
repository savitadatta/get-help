chrome.runtime.onMessage.addListener((msg) => {
    if (msg.text === "getHelp") {
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            var btn = links[i];
            var name = btn.textContent || btn.innerText;

            if (name.toLowerCase().includes("about") || name.toLowerCase().includes("help")) {
                chrome.runtime.sendMessage({
                    from: "getHelp",
                    text: links[i].href
                });
            }
        }   
    }
});