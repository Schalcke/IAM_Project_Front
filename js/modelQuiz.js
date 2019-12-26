/*  Activate the tooltips      */
$('[rel="tooltip"]').tooltip();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
})

// QUIZ
window.addEventListener('scroll', function() {
  navbarScroll();
  });
  function navbarScroll() {
  var y = window.scrollY;
  if (y > 10) {
      var header = document.getElementsByClassName('header')[0];
      header.classList.add('small');

  } else if (y < 10) {
      var header = document.getElementsByClassName('header')[0];
      header.classList.remove('small');
  }
  }

var pointTotal = 0;
var pointMathLogique = 0;
var pointCltrG = 0;
var pointCmprEprvEcrt = 0;
var score = 0;
$('#submtQuiz').click(
    function() {
        // Math & Logique
        if ($(':radio[id="r3"]:checked').val()) {
            pointTotal = pointTotal + 3;
            pointMathLogique = pointMathLogique + 3;
        };
        if ($(':radio[id="r8"]:checked').val()) {
          pointTotal = pointTotal + 5;
          pointMathLogique = pointMathLogique + 5;
        };
        if ($(':radio[id="r9"]:checked').val()) {
          pointTotal = pointTotal + 2;
          pointMathLogique = pointMathLogique + 2;
        };
        // Culture Général
        if ($(':radio[id="r14"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r19"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r23"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r29"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r31"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r36"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r40"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r45"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r51"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r56"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r61"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r66"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r72"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r79"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r85"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r91"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r95"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r101"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r104"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r109"]:checked').val()) {
            pointTotal = pointTotal + 2;
            pointCltrG = pointCltrG + 2;
        };
        // Comprehension Expression Ecrite
        if ($(':radio[id="r115"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r120"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r124"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r130"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r133"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r138"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r145"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r151"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r152"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r158"]:checked').val()) {
            pointTotal = pointTotal + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };

        // Show en stylise the score résult
        console.log('Votre note total est de :' + pointTotal + ' / 60');
        console.log('Votre note pour Math et logique est de :' + pointMathLogique + ' / 10');
        console.log('Votre note la culture général est de :' + pointCltrG + ' / 40');
        console.log('Votre note la comprehenssion et l\'expression écrite est de :' + pointCmprEprvEcrt + ' / 10');

        score = (pointTotal * 100) / 60;
        Math.round(score);
        console.log("<h2>Votre score est de</h2>");

        $('#felicitation').append('Votre score est de ' + score + '%');
        if (score < 60) {
            $('#felicitation').css('color', 'red');
        }

        $('#mathLgq').append(pointMathLogique + ' / 10Ponits');
        $('#cltrGActl').append(pointCltrG + ' / 40Ponits');
        $('#fr').append(pointCmprEprvEcrt + ' / 10Ponits');

    }

    
);

// Stylise Icone cercle onClick input

$('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q1") {
        $('#I1').css('color', '#14601E');
        $('#TI1').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q2") {
        $('#I2').css('color', '#14601E');
        $('#TI2').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q3") {
        $('#I3').css('color', '#14601E');
        $('#TI3').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q4") {
        $('#I4').css('color', '#14601E');
        $('#TI4').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q5") {
        $('#I5').css('color', '#14601E');
        $('#TI5').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q6") {
        $('#I6').css('color', '#14601E');
        $('#TI6').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q7") {
        $('#I7').css('color', '#14601E');
        $('#TI7').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q8") {
        $('#I8').css('color', '#14601E');
        $('#TI8').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q9") {
        $('#I9').css('color', '#14601E');
        $('#TI9').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q10") {
        $('#I10').css('color', '#14601E');
        $('#TI10').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q11") {
        $('#I11').css('color', '#14601E');
        $('#TI11').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q12") {
        $('#I12').css('color', '#14601E');
        $('#TI12').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q13") {
        $('#I13').css('color', '#14601E');
        $('#TI13').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q14") {
        $('#I14').css('color', '#14601E');
        $('#TI14').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q15") {
        $('#I15').css('color', '#14601E');
        $('#TI15').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q16") {
        $('#I16').css('color', '#14601E');
        $('#TI16').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q17") {
        $('#I17').css('color', '#14601E');
        $('#TI17').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q18") {
        $('#I18').css('color', '#14601E');
        $('#TI18').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q19") {
        $('#I19').css('color', '#14601E');
        $('#TI19').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q20") {
        $('#I20').css('color', '#14601E');
        $('#TI20').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q21") {
        $('#I21').css('color', '#14601E');
        $('#TI21').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q22") {
        $('#I22').css('color', '#14601E');
        $('#TI22').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q23") {
        $('#I23').css('color', '#14601E');
        $('#TI23').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q24") {
        $('#I24').css('color', '#14601E');
        $('#TI24').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q25") {
        $('#I25').css('color', '#14601E');
        $('#TI25').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q26") {
        $('#I26').css('color', '#14601E');
        $('#TI26').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q27") {
        $('#I27').css('color', '#14601E');
        $('#TI27').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q28") {
        $('#I28').css('color', '#14601E');
        $('#TI28').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q29") {
        $('#I29').css('color', '#14601E');
        $('#TI29').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q30") {
        $('#I30').css('color', '#14601E');
        $('#TI30').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q31") {
        $('#I31').css('color', '#14601E');
        $('#TI31').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q32") {
        $('#I32').css('color', '#14601E');
        $('#TI32').css('border-left', 'none');
    }
  });

  $('input:radio').click(function() { 
    console.log($(this).attr('name')); 
    if ($(this).attr('name') == "Q33") {
        $('#I33').css('color', '#14601E');
        $('#TI33').css('border-left', 'none');
    }
  });

  dt = new Date();
dt.setDate(dt.getDate() + 1);
var curr_min = dt.getMinutes();
console.log(curr_min);


/* 
A chaque clique sur un input de meme name incrémente un nombre de 1
Pour désactiver le button if (un nmbre = nombre de question n'est pas atteint n'active pas le button envoyer )
le nombre doit étre égale aux nombre de question 

*/

// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2019 18:00:00").getTime();// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("timer").innerHTML = 'Durée ' + hours + "H " + minutes + "mn " + seconds + "s ";
  document.getElementById("rbr").innerHTML = seconds;

  $( "brand" ).addClass( "sonar-wave" );

  if (seconds < 30) {
    //  $('.video-play-button')before.css('background-color', 'red');
      $('.video-play-button').append('<style>.video-play-button:before{background-color:red !important;}</style>');
      $('.video-play-button').append('<style>.video-play-button:after{background-color:red !important;}</style>');
  } else {
      $('.video-play-button').append('<style>.video-play-button:before{background-color:green !important;}</style>');
      $('.video-play-button').append('<style>.video-play-button:after{background-color:green !important;}</style>');
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tracking").innerHTML = "Désolé mais le temps accordé à ce test est expiré !";
  }
}, 1000);