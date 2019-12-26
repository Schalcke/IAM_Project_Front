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
$("input").click(
  function() {
    if(this.name = true) {
      var elmt = this.parentNode;
      var element_r1 = elmt.parentNode;
      var element_r2 = element_r1.parentNode;
      var element_r3 = element_r2.parentNode;
      var element_r4 = element_r3.parentNode;
      $(element_r4).children('.status-intransit').css({'color': '#14601E'});
      $(element_r4).css('border-left', 'none');
    }
  }
)

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
var countDownDate = new Date("Jan 20, 2020 18:00:00").getTime();// Update the count down every 1 second
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