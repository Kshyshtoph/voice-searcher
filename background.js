chrome.runtime.onInstalled.addListener(function() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  if (annyang) {
    // Let's define a command.
    var commands = {
      hello: function() {
        alert("Hello world!");
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
});

// const SpeechRecognition =
//   window.speechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// recognition.addEventListener("result", e => {
//   console.log(e.results[0][0].transcript);
// });
// recognition.addEventListener("end", recognition.start);
// recognition.start();
