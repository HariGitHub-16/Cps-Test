// Cool code for Including other js files. Found in GeeksforGeeks
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

include("source_code.js");

var clicks = 0;
var counter = document.getElementById("counter");
var time = document.getElementById("time");
var game_div = document.getElementById("when_start").style;
var start_btn = document.getElementById("start").style;
var afterwards = document.getElementById("afterwards"); var afterwards_style = afterwards.style;
var t = null; // t is for the timer


function UpdateClicks(thing)
{
  if (thing == counter)
  {
    thing.innerHTML = "Total Clicks : " + clicks.toString();
  }
  
  else if (thing == afterwards)
  {
    cps = Math.ceil(clicks/5);
    thing.innerHTML = "Clicks Per Second : " + cps.toString(); 
  }
}


function HeClicked()
{
    clicks+=1;
    UpdateClicks(counter);
    ShowTime();
}


function Start()
{

   clicks = 0;
   UpdateClicks(counter);
   
   time.innerHTML = "Time Left : 5000";
   afterwards_style.visibility = "hidden"; 
   game_div.visibility = "visible";
   start_btn.visibility = "hidden";
    // THIS IS NOT PREDEFINED CODE!!!! check source_code.js for timer function. The reason i did this is so that 
    // i can see how much time is left.
   t = new timer(function ()
   {
     Finish()
   }, 5000);

}

function Finish()
{

   game_div.visibility = "hidden";
   start_btn.visibility = "visible";
   afterwards_style.visibility = "visible";
   console.log(clicks);
   UpdateClicks(afterwards);
  
}

function ShowTime()
{
  time_left = t.getTimeLeft()/1000;
  time.innerHTML = "Time Left : " + time_left.toString();
}