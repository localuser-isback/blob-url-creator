if (window.location.href.indexOf("blob:") === -1) {
  var escapeChars = {
    "<": "\\u003c",
    ">": "\\u003e",
    "'": "\\u0027",
    "\"": "\\u0022",
  };

  var url = window.location.href.replace(/[<>'"]/g, (char) => escapeChars[char]);
  var iframeContent = `<iframe src="${url}" style="width:100%;height:100%;position:fixed;top:0;left:0;"></iframe>`;
  var blob = new Blob([iframeContent], { type: "text/html" });
  window.location.href = URL.createObjectURL(blob);
}
