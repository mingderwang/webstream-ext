chrome.scripting.registerContentScript({
  target: { allFrames: true },
  function: function(details) {
    fetch(details.url).then(function(response) {
      const reader = response.body.getReader();
      const writer = new WritableStream({
        write(chunk) {
          console.log(chunk.toString());
        }
      });
      reader.pipeTo(writer);
    });
  }
});

chrome.webRequest.onCompleted.addListener(function(details) {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    function: function(details) {},
    args: [details]
  });
}, { urls: ["<all_urls>"] });
