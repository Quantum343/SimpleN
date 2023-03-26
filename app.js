// grab necessary elements from HTML
const code = document.getElementById("code");
const runBtn = document.getElementById("run-btn");
const clearBtn = document.getElementById("clear-btn");

// add click event listener to run button
runBtn.addEventListener("click", () => {
  // create new HTML file with code from textarea
  const html = `<html><head><title>Code Runner Output</title></head><body>${code.value}</body></html>`;
  const file = new Blob([html], { type: "text/html" });
  const fileURL = URL.createObjectURL(file);

  // open new tab with HTML file
  const newTab = window.open();
  newTab.document.write(`<iframe src="${fileURL}" width="100%" height="100%"></iframe>`);
});

// add click event listener to clear button
clearBtn.addEventListener("click", () => {
  code.value = "";
});
