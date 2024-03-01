/* audio button sound */
var btn1 = new Audio();
btn1.src = "audio/btn1.mp3";

var back = new Audio();
back.src = "audio/back.wav";

btn2 = new Audio();
btn2.src = "audio/btn2.mp3";

function pro(){
  alert("no linked, bitch....")
}

PlayPro = () => {
  document.querySelector("audio").play();
};

var typed = new Typed(".ptext", {
  strings: [
    "Im a Terminal user, &amp; front-end dev. focusing on exploring and customizing some staff.",
  ], typeSpeed: 50,
});

// termux terminal
const instance = new TypeIt("#term1", {
    strings: "Exploring command about on linux.",
    speed: 60,
    waitUntilVisible: true,
  }).go();
  
new TypeIt("#term2", {
    strings: "I learn some basic database command using terminal on android phone.",
    speed: 50,
    waitUntilVisible: true,
}).go();

new TypeIt("#term3", {
  strings: "Our instructor make us our very own mobile application using hybrid languages such as html5, css3, js, and juery mobile.",
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#term4", {
  strings: "Our instructor make us our very own mobile application using hybrid languages such as html5, css3, js, and juery mobile..",
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#term5", {
  strings: "student data management intern, and much more.",
  speed: 50,
  waitUntilVisible: true,
}).go();

