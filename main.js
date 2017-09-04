
searchCaswareAssigments = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://hooks.slack.com/services/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" + query});
};

chrome.contextMenus.create({
  title: "Search Caseware Assignments",
  contexts:["selection"],
  onclick: searchCaswareAssigments
});


buildCaswareAssigment = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://hooks.slack.com/services/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" + query});
};

chrome.contextMenus.create({
  title: "Build Caseware Assignment...",
  contexts:["selection"],
  onclick: buildCaswareAssigment
});

saveCaswareAssigment = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://hooks.slack.com/services/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" + query});
};

chrome.contextMenus.create({
  title: "Save Caseware Assignments",
  contexts:["selection"],
  onclick: saveCaswareAssigment
});

