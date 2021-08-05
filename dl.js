var downloadButton = document.getElementByClassName("shortc-button");
var counter = 61;
var newElement = document.createElement("div");
newElement.innerHTML = "You can download the file in 60 seconds.";
var id;
downloadButton.parentNode.replaceChild(newElement, downloadButton);
id = setInterval(function() {
counter--;
if(counter < 0) {
newElement.parentNode.replaceChild(downloadButton, newElement);
clearInterval(id);
} else {
newElement.innerHTML = "You can download the file in " + counter.toString() + " seconds.";
}}, 1000);