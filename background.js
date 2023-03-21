chrome.webRequest.onCompleted.addListener(function(details) {
  fetch(details.url).then(function(response) {
    const reader = response.body.getReader();
    const writer = new WritableStream({
      write(chunk) {
        console.log(chunk.toString());
      }
    });
    reader.pipeTo(writer);
  });
}, { urls: ["<all_urls>"] });

