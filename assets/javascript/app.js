//triva game javascript

/*----------------------------------------------------------------------------------//Variables//-------------------------------------------------------------------------------------------*/
   
  var number = 30;//Our starting Count number
  var intervalId; //our variable for time tracking
  var indexPosition=0; //our variable for question object
  var userResponseA; //our variables for user choice
  var userResponseB;
  var userResponseC;
  var userResponseD;
  var wrongAnswers=0; //our variable for tracking incorrect answer quantity
  var rightAnswers=0; //our variable for tracking correct answer quantity

//Array of Questions and Answers as Objects

  var qanda = //each object still needs a gif, music, picture, etc... and a statement saying the correct answer is blah blah
  [
    question1 = 
    {
      question: "What is the real name of Solid Snake?", //object contains standard property names with unique values
      ansA: "Ezekiel",
      ansB: "Travis",
      ansC: "Jason",
      ansD: "David",
      correct: "David",
      giphy: '<iframe src="https://giphy.com/embed/HGJa6APWBy2ly" width="480" height="440" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-mgs-HGJa6APWBy2ly">via GIPHY</a></p>'
    },
    question2 = 
    {
      question: "What is Otacon's favorite type of entertainment?",
      ansA: "Romance Novellas",
      ansB: "Soap Operas",
      ansC: "Anime",
      ansD: "Silent Films",
      correct: "Anime",
      giphy: '<iframe src="https://giphy.com/embed/XsHMcJL2nv2es" width="480" height="266" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-XsHMcJL2nv2es">via GIPHY</a></p>'
    },
    question3 = 
    {
      question: "What is the codename of the cyborg ninja?",
      ansA: "Gray Fox",
      ansB: "Leaping Squirrel",
      ansC: "Red Raven",
      ansD: "Blue Dingo",
      correct: "Gray Fox",
      giphy: '<iframe src="https://giphy.com/embed/bNd3sDh3JWfmg" width="480" height="357" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-bNd3sDh3JWfmg">via GIPHY</a></p>'
    },
    question4 = 
    {
      question: "Where does Snake have his final fight with Sniper Wolf?",
      ansA: "In the weapons depot",
      ansB: "On top of the admin building",
      ansC: "In the abandoned bunker",
      ansD: "Outside between buildings",
      correct: "Outside between buildings",
      giphy: '<iframe src="https://giphy.com/embed/tIpxejYrfoiuA" width="480" height="264" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-tIpxejYrfoiuA">via GIPHY</a></p>'
    },
    question5 = 
    {
      question: "What controller button do you press to open the codec?",
      ansA: "Circle",
      ansB: "Select",
      ansC: "Square",
      ansD: "D-Pad",
      correct: "Select",
      giphy: '<iframe src="https://giphy.com/embed/rLyyt1SjPpXkQ" width="480" height="480" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-rLyyt1SjPpXkQ">via GIPHY</a></p>'
    },
    question6 = 
    {
      question: "What does the TV screen briefly flash when you fight Psycho Mantis?",
      ansA: "Hideo",
      ansB: "Jack",
      ansC: "Lexicon",
      ansD: "Ignore",
      correct: "Hideo",
      giphy: '<iframe src="https://giphy.com/embed/BwRKPIpZp3NFS" width="480" height="366" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hideo-kojima-BwRKPIpZp3NFS">via GIPHY</a></p>'
    },
    question7 = 
    {
      question: "What is Revolver Ocelot's nickname?",
      ansA: "Sarajevo",
      ansB: "Gunslinger",
      ansC: "Shalashaska",
      ansD: "Theros",
      correct: "Shalashaska",
      giphy: '<iframe src="https://giphy.com/embed/ZKGkjfb1HItl6" width="480" height="303" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-ZKGkjfb1HItl6">via GIPHY</a></p>'
    },
    question8 = 
    {
      question: "Roy Campbell believes which character is his niece?",
      ansA: "Alysia Solaris",
      ansB: "Meryl Silverburgh",
      ansC: "Cynthia Emmerich",
      ansD: "Emily Watanabe",
      correct: "Meryl Silverburgh",
      giphy: '<iframe src="https://giphy.com/embed/kez307Zp2dw8U" width="480" height="316" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-kez307Zp2dw8U">via GIPHY</a></p>'
    },
    question9 = 
    {
      question: "Which answer best fits as the description for what Metal Gear actually is?",
      ansA: "A Bi-pedal Tank",
      ansB: "An Immensely Strong Alloy",
      ansC: "An Offroad AI system",
      ansD: "A Tactical Nuclear Warhead",
      correct: "A Bi-pedal Tank",
      giphy: '<iframe src="https://giphy.com/embed/wSbREGgLrc9yM" width="480" height="480" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metal-gear-solid-wSbREGgLrc9yM">via GIPHY</a></p>'
    },
    question10 = 
    {
      question: "Which body part does Ocelot lose in a fight with the Cyborg Ninja?",
      ansA: "Foot",
      ansB: "Hand",
      ansC: "Arm",
      ansD: "Leg",
      correct: "Hand",
      giphy: '<iframe src="https://giphy.com/embed/aGGdnKGiV75Xa" width="480" height="372" frameBorder="0" class="giphy-embed center-block" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gear-mg-mgsv-aGGdnKGiV75Xa">via GIPHY</a></p>'
    }
  ]

/*----------------------------------------------------------------------------------//Functions//-------------------------------------------------------------------------------------------*/

  //TIME COUNTDOWN FUNCTIONS and TIMEOUT FUNCTIONS
  function decrement() //decrease counter function
  {
    number--;//decrease the count number by 1

    if (number <10) 
    {
      $("#time").html("Time Remaining: 00:0" + number);//update time element with new value
    }
    else
    {
      $("#time").html("Time Remaining: 00:" + number);//update time element with new value
    }

    if (number === -1) 
    {
      timeOut(); //run response to countdown completion
    }
  }

  function timeOut() //run out of time function
  {
    clearInterval(intervalId);
    wrongAnswers++;
    indexPosition++; //update count to test for final state
    number=30;
    if (indexPosition>9)
    {
      indexPosition--;
      var htmlTimeout = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">You have run out of time!</div><div class="panel-body"><h3 class = "text-center">The correct answer is '+qanda[indexPosition].correct+'</h3><div>'+qanda[indexPosition].giphy+'</div></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearGameOver.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      $("#triviaZone").html(htmlTimeout); //Load results page
      var htmlFinal = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">Quiz Complete!</div><div class="panel-body"><h3 class = "text-center">Questions Right: '+rightAnswers+'</h3><h3 class = "text-center">Questions Wrong: '+wrongAnswers+'</h3><button id="restart" class="center-block">Restart</button></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearMainTheme.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      setTimeout(function(){ $("#triviaZone").html(htmlFinal); }, 8000);
      setTimeout(function(){restart(); }, 8500);
    }
    else
    {
      indexPosition--;//update count to reflect correct answer screen
      var htmlTimeout = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">You have run out of time!</div><div class="panel-body"><h3 class = "text-center">The correct answer is '+qanda[indexPosition].correct+'</h3><div>'+qanda[indexPosition].giphy+'</div></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearGameOver.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      $("#triviaZone").html(htmlTimeout); //results page
      indexPosition++;//update count to load next question
      var html1 = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center" id=time>Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio id=ansA><label><input name=optradio type=radio>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio>'+qanda[indexPosition].ansD+'</label></div></ul><div><audio autoplay class=center-block controls><source src=assets/images/metalGearEncounter.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div></div></div>';
      setTimeout(function(){ $("#triviaZone").html(html1); }, 8000); //Load next question after 5 seconds - this NEEDS function pretext or else it fires immediately and errors
      setTimeout(function(){ intervalId = setInterval(decrement, 1000); }, 8000); //countdown begins after 5 second delay to allow for page to reload
      setTimeout(function(){ userResponse()}, 8000); //user response is received
    }
  }

  //FUNCTIONS FOR CHECKING ANSWERS
  function resultsA() //response to A answer chosen
  {
    if(($("#ansA").text())===qanda[indexPosition].correct)
    {
      right();
    }
    else
    {
      wrong();
    }
  }

  function resultsB() //response to B answer chosen
  {
    if(($("#ansB").text())===qanda[indexPosition].correct)
    {
      right();
    }
    else
    {
      wrong();
    }
  }

  function resultsC() //response to C answer chosen
  {
    if(($("#ansC").text())===qanda[indexPosition].correct)
    {
      right();
    }
    else
    {
      wrong();
    }
  }

  function resultsD() //response to D answer chosen
  {
    if(($("#ansD").text())===qanda[indexPosition].correct)
    {
      right();
    }
    else
    {
      wrong();
    }
  }

  // function for listening for click
  function userResponse()
  {
    userResponseA = $("#ansA").click(resultsA); //define what occurs when A answer is chosen
    userResponseB = $("#ansB").click(resultsB); //define what occurs when B answer is chosen
    userResponseC = $("#ansC").click(resultsC); //define what occurs when C answer is chosen
    userResponseD = $("#ansD").click(resultsD); //define what occurs when D answer is chosen
  }

  //function for responding to right answer
  function right()
  {
    clearInterval(intervalId);
    number=30;
    indexPosition++;
    rightAnswers++;
    if (indexPosition>9)
    {
      indexPosition--;
      var htmlRight = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">Excellent Work!</div><div class="panel-body"><h3 class = "text-center">The correct answer is '+qanda[indexPosition].correct+'</h3><div>'+qanda[indexPosition].giphy+'</div></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearLevelComplete.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      $("#triviaZone").html(htmlRight); //Load results page
      var htmlFinal = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">Quiz Complete!</div><div class="panel-body"><h3 class = "text-center">Questions Right: '+rightAnswers+'</h3><h3 class = "text-center">Questions Wrong: '+wrongAnswers+'</h3><button id="restart" class="center-block">Restart</button></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearMainTheme.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      setTimeout(function(){ $("#triviaZone").html(htmlFinal); }, 8000);
      setTimeout(function(){restart(); }, 8500);
    }
    else
    {
      indexPosition--;
      var htmlRight = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">Excellent Work!</div><div class="panel-body"><h3 class = "text-center">The correct answer is '+qanda[indexPosition].correct+'</h3><div>'+qanda[indexPosition].giphy+'</div></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearLevelComplete.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      $("#triviaZone").html(htmlRight); //Load results page
      indexPosition++;
      var html1 = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center" id=time>Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio id=ansA><label><input name=optradio type=radio>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio>'+qanda[indexPosition].ansD+'</label></div></ul><div><audio autoplay class=center-block controls><source src=assets/images/metalGearEncounter.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div></div></div>';
      setTimeout(function(){ $("#triviaZone").html(html1); }, 8000);
      setTimeout(function(){ intervalId = setInterval(decrement, 1000); }, 8000); //countdown begins after 5 second delay to allow for page to reload
      setTimeout(function(){ userResponse()}, 8000); //user response is received
    }
  }

  //function for responding to wrong answer
  function wrong()
  {
    clearInterval(intervalId);
    number=30;
    indexPosition++;
    wrongAnswers++;
    if (indexPosition>9)
    {
      indexPosition--;
      var htmlWrong = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">You will have to try harder than that!</div><div class="panel-body"><h3 class = "text-center">The correct answer is '+qanda[indexPosition].correct+'</h3><div>'+qanda[indexPosition].giphy+'</div></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearGameOver.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      $("#triviaZone").html(htmlWrong); //Load results page
      var htmlFinal = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">Quiz Complete!</div><div class="panel-body"><h3 class = "text-center">Questions Right: '+rightAnswers+'</h3><h3 class = "text-center">Questions Wrong: '+wrongAnswers+'</h3><button id="restart" class="center-block">Restart</button></div></div></div><div><audio autoplay class="center-block" controls><source src=assets/images/metalGearMainTheme.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      setTimeout(function(){ $("#triviaZone").html(htmlFinal); }, 8000);
      setTimeout(function(){restart(); }, 8500);
    }
    else
    {
      indexPosition--;
      var htmlWrong = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center">You will have to try harder than that!</div><div class="panel-body"><h3 class = "text-center">The correct answer is '+qanda[indexPosition].correct+'</h3><div>'+qanda[indexPosition].giphy+'</div></div></div></div><div><audio autoplay class=center-block controls><source src=assets/images/metalGearGameOver.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div>';
      $("#triviaZone").html(htmlWrong); //Load results page
      indexPosition++;
      var html1 = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center" id=time>Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio id=ansA><label><input name=optradio type=radio>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio>'+qanda[indexPosition].ansD+'</label></div></ul><div><audio autoplay class=center-block controls><source src=assets/images/metalGearEncounter.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div></div></div>';
      setTimeout(function(){ $("#triviaZone").html(html1); }, 8000);
      setTimeout(function(){ intervalId = setInterval(decrement, 1000); }, 8000); //countdown begins after 5 second delay to allow for page to reload
      setTimeout(function(){ userResponse()}, 8000); //user response is received
    }
  }

  //Function for game restart
  function restart()
  {
    $("#restart").on("click", function(){
      wrongAnswers=0; //our variable for tracking incorrect answer quantity
      rightAnswers=0; //our variable for tracking correct answer quantity
      indexPosition=0;
      begin();
    });
  }

  //Function for game Begin
  function begin()
  {
    var html1 = '<div class = "col-xs-12"><div class="panel panel-danger"><div class=panel-heading><p class="panel-title text-center" id="time">Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio id=ansA><label><input name=optradio type=radio>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio>'+qanda[indexPosition].ansD+'</label></div></ul><div><audio autoplay class=center-block controls><source src=assets/images/metalGearEncounter.mp3 type=audio/mpeg>Your browser does not support the audio element.</audio></div></div></div>';
    $("#triviaZone").html(html1); //Load first question
    intervalId = setInterval(decrement, 1000); //countdown begins
    userResponse(); //user response is received
  }

/*----------------------------------------------------------------------------------//Game Start//-------------------------------------------------------------------------------------------*/


$(document).ready(function()
{//beginning of document ready
  //listening for spacebar command to start game
  var keyPressCount=0; //to prevent multiple clicks or spacebars
  $(window).keypress(function (e) {
    if ((e.keyCode === 0 || e.keyCode === 32)&&(keyPressCount<1)) {
      e.preventDefault()
      console.log('Space pressed')
      $("#menuMusic")[0].pause();
      $("#gunshot")[0].play();
      keyPressCount++;
      setTimeout(function(){ begin()}, 2000);
    }
  })
  //listening for mouse click to start game (for the mobile)
  $(window).click(function (e) {
      if(keyPressCount<1){
      e.preventDefault()
      console.log('Mouse click')
      $("#menuMusic")[0].pause();
      $("#gunshot")[0].play();
      keyPressCount++;
      setTimeout(function(){ begin()}, 2000);}
  })
});//end of document ready