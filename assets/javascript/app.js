//triva game javascript

/*----------------------------------------------------------------------------------//Variables//-------------------------------------------------------------------------------------------*/
   
  var number = 30;//Our starting Count number
  var intervalId;
  var indexPosition=0;
  var userResponseA;

//Array of Questions and Answers as Objects

  var qanda = 
  [
    question1 = 
    {
      question: "What is the real name of Solid Snake?", //object contains standard property names with unique values
      ansA: "Ezekiel",
      ansB: "Travis",
      ansC: "Jason",
      ansD: "David",
      correct: "David"
    },
    question2 = 
    {
      question: "Where is Shadow Moses island located?",
      ansA: "Russia",
      ansB: "Alaska",
      ansC: "Madacasgar",
      ansD: "Guam",
      correct: "Alaska"
    },
    question3 = 
    {
      question: "What is the codename of the cyborg ninja?",
      ansA: "Gray Fox",
      ansB: "Leaping Squirrel",
      ansC: "Red Raven",
      ansD: "Blue Dingo",
      correct: "Gray Fox"
    },
    question4 = 
    {
      question: "Sniper Wolf was loved by which character?",
      ansA: "Revolver Ocelot",
      ansB: "Liquid Snake",
      ansC: "Otacon",
      ansD: "Commander Miller",
      correct: "Otacon"
    },
    question5 = 
    {
      question: "What controller button do you press to open the codec?",
      ansA: "Circle",
      ansB: "Select",
      ansC: "Square",
      ansD: "D-Pad",
      correct: "Select"
    },
    question6 = 
    {
      question: "What does the TV screen briefly flash when you fight Psycho Mantis?",
      ansA: "Hideo",
      ansB: "Jack",
      ansC: "Lexicon",
      ansD: "Ignore",
      correct: "Hideo"
    },
    question7 = 
    {
      question: "What is Revolver Ocelot's nickname?",
      ansA: "Sarajevo",
      ansB: "Gunslinger",
      ansC: "Shalashaska",
      ansD: "Theros",
      correct: "Shalashaska"
    },
    question8 = 
    {
      question: "Meryl Silverburgh is said to be the niece of which character?",
      ansA: "Tiberius Kirk",
      ansB: "Jon Anderson",
      ansC: "Roy Campbell",
      ansD: "Serverus Ames",
      correct: "Roy Campbell"
    },
    question9 = 
    {
      question: "Which answer best fits as the description for what Metal Gear actually is?",
      ansA: "Bi-pedal Tank",
      ansB: "An Immensely Strong Alloy",
      ansC: "Offroad AI system",
      ansD: "Tactical Nuclear Warhead",
      correct: "Bi-pedal Tank"
    },
    question10 = 
    {
      question: "Afte the game is finished and the credits complete, who is Ocelot speaking with on the phone?",
      ansA: "The Secretary of Defense",
      ansB: "The President",
      ansC: "Allan Iverson",
      ansD: "The Lead Genome Scientist",
      correct: "The President"
    }
  ]

  var html1 = { html: '<div class=panel-heading><p class="panel-title text-center" id=time>Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio><label><input name=optradio type=radio id=ansA>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio id=ansB>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio id=ansC>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio id=ansD>'+qanda[indexPosition].ansD+'</label></div></ul>'}
  var htmlRight = { html: '<div class=panel-heading><p class="panel-title text-center"> This is the results page! </div><div class="panel-body"><h3>Right!!!!!!</h3></div>'}
  var htmlWrong = { html: '<div class=panel-heading><p class="panel-title text-center"> This is the results page! </div><div class="panel-body"><h3>Wrong!!!!!!</h3></div>'}
  var htmlTimeout = { html: '<div class=panel-heading><p class="panel-title text-center"> This is the results page! </div><div class="panel-body"><h3>Out of Time!!!!!!</h3></div>'}
  var htmlFinal = { html: '<div class=panel-heading><p class="panel-title text-center"> This is the results page! </div><div class="panel-body"><h3>Final RESULTS!!!!!!</h3></div>'}

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

    if (number === 0) 
    {
      timeOut(); //run response to countdown completion
    }
  }

  function timeOut() //run out of time function
  {
    clearInterval(intervalId);
    alert("Time Up!");
    //Load correct answer info - have time pass    
    //Load next question and answer
    indexPosition++; //update to next question object
    number=30;
    html1.html = '<div class=panel-heading><p class="panel-title text-center" id=time>Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio><label><input name=optradio type=radio id=ansA>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio id=ansB>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio id=ansC>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio id=ansD>'+qanda[indexPosition].ansD+'</label></div></ul>';
    $("#triviaZone").html(htmlTimeout.html); //results page
    setTimeout(function(){ $("#triviaZone").html(html1.html); }, 5000); //Load next question after 5 seconds - this NEEDS function pretext or else it fires immediately and errors
    setTimeout(function(){ intervalId = setInterval(decrement, 1000); }, 5000); //countdown begins after 5 second delay to allow for page to reload
    setTimeout(function(){ userResponse()}, 5000); //user response is received
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
    html1.html = '<div class=panel-heading><p class="panel-title text-center" id=time>Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio><label><input name=optradio type=radio id=ansA>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio id=ansB>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio id=ansC>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio id=ansD>'+qanda[indexPosition].ansD+'</label></div></ul>';
    $("#triviaZone").html(htmlRight.html); //Load results page
    setTimeout(function(){ $("#triviaZone").html(html1.html); }, 5000);
    setTimeout(function(){ intervalId = setInterval(decrement, 1000); }, 5000); //countdown begins after 5 second delay to allow for page to reload
    setTimeout(function(){ userResponse()}, 5000); //user response is received
  }

  //function for responding to wrong answer
  function wrong()
  {
    clearInterval(intervalId);
    number=30;
    indexPosition++;
    html1.html = '<div class=panel-heading><p class="panel-title text-center" id=time>Time Remaining: 00:30</div><div class=panel-body><h3>'+qanda[indexPosition].question+'</h3></div><ul class="center-block list-group"><li class=list-group-item><div class=radio><label><input name=optradio type=radio id=ansA>'+qanda[indexPosition].ansA+'</label></div><li class=list-group-item><div class=radio id=ansB><label><input name=optradio type=radio id=ansB>'+qanda[indexPosition].ansB+'</label></div><li class=list-group-item><div class=radio id=ansC><label><input name=optradio type=radio id=ansC>'+qanda[indexPosition].ansC+'</label></div><li class=list-group-item><div class=radio id=ansD><label><input name=optradio type=radio id=ansD>'+qanda[indexPosition].ansD+'</label></div></ul>';
    $("#triviaZone").html(htmlWrong.html); //Load results page
    setTimeout(function(){ $("#triviaZone").html(html1.html); }, 5000);
    setTimeout(function(){ intervalId = setInterval(decrement, 1000); }, 5000); //countdown begins after 5 second delay to allow for page to reload
    setTimeout(function(){ userResponse()}, 5000); //user response is received
  }

/*----------------------------------------------------------------------------------//Game Start//-------------------------------------------------------------------------------------------*/


$(document).ready(function()
{//beginning of document ready
  //add start logic here
  $("#triviaZone").html(html1.html); //Load first question
  intervalId = setInterval(decrement, 1000); //countdown begins
  var testA = $("#ansA").text();
  var testB = $("#ansB").text();
  console.log(testA); //test shows there is nothing inside of the element...why?
  console.log(testB);
  console.log(qanda[0].ansA);
  userResponse(); //user response is received
});//end of document ready