 height= 0;
width = 0;
to_number=0;
draw_apple = "";
apple="";
speak_data="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number=Number(content);
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 if(Number.isInteger(to_number)){
   document.getElementById("status").innerHTML="started drawing apple";
   draw_apple="set";
    } 
    else{
      document.getElementById("status").innerHTML="The speech has not recognized a number";
    }

    

}

function setup() {
  width=window.innerWidth;
  height=window.innerHeight;
 canvas=createCanvas(width-100,height-150);
 canvas.position(100,100);

}

function draw() {
  if(draw_apple == "set")
  {
    for (let number =1; number <=to_number; number++) {
      x=Math.floor(Math.random()*600 );
      y=Math.floor(Math.random()*300 );
      image(apple,x,y,40,40);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();

  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function preload(){
  apple=loadImage("apple.png");
}