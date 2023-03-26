// grab necessary elements from HTML
const code = document.getElementById("code");
const saveBtn = document.getElementById("save-btn");
const runBtn = document.getElementById("run-btn");
const clearBtn = document.getElementById("clear-btn");

// add click event listener to save button
saveBtn.addEventListener("click", () => {
  const name = prompt("Enter a name for the file:");
  const format = prompt("Enter the format of the file (html or js):");
  const file = new Blob([code.value], { type: `text/${format}` });
  const fileURL = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = fileURL;
  link.download = `${name}.${format}`;
  link.click();
});

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
// Notepad V1.1 
// Made by Sam Anwar
// Version: Stable