chrome.browserAction.onClicked.addListener(
    function(tab) {
        chrome.tabs.sendRequest(tab.id, {method: "getSelection"},
            function(response){
                var text;
                if (response.data) {
                    text = response.data;
                } else{
                    text = tab.title;
                }
                sendServiceRequest(
                    encodeURIComponent(text),
                    encodeURIComponent(tab.url)
                );
            }
        );
    }
);
function sendServiceRequest(text, url) {
    var url = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url;
    chrome.tabs.create({url: url});
}
