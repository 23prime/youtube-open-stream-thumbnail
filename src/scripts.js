chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == "Action") {
        const streamId = new URL(location.href).searchParams.get("v");

        if (streamId) {
            const thumbnailUrl = `https://i.ytimg.com/vi/${streamId}/maxresdefault.jpg`;
            window.open(thumbnailUrl);
        }
    }
});
