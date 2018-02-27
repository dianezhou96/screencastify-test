var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myButton = document.querySelector('button');
myButton.onclick = function() {
	alert('IHTFP!')
};

var myWindow = document.querySelector('window');
myWindow.onbeforeunload = function(e) {
	alert('do you want to quit?');
	recorder.stop();
}