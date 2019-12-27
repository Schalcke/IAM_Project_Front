// Calcul note
$('#submtQuiz').click(
    function() {
        // Math & Logique
        if ($(':radio[id="r3"]:checked').val()) {
            totalPoints = totalPoints + 3;
            pointMathLogique = pointMathLogique + 3;
        };
        if ($(':radio[id="r8"]:checked').val()) {
          totalPoints = totalPoints + 5;
          pointMathLogique = pointMathLogique + 5;
        };
        if ($(':radio[id="r9"]:checked').val()) {
          totalPoints = totalPoints + 2;
          pointMathLogique = pointMathLogique + 2;
        };
        // Culture Général
        if ($(':radio[id="r14"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r19"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r23"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r29"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r31"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r36"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r40"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r45"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r51"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r56"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r61"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r66"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r72"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r79"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r85"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r91"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r95"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r101"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r104"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        if ($(':radio[id="r109"]:checked').val()) {
            totalPoints = totalPoints + 2;
            pointCltrG = pointCltrG + 2;
        };
        // Comprehension Expression Ecrite
        if ($(':radio[id="r115"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r120"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r124"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r130"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r133"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r138"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r145"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r151"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r152"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };
        if ($(':radio[id="r158"]:checked').val()) {
            totalPoints = totalPoints + 1;
            pointCmprEprvEcrt = pointCmprEprvEcrt + 1;
        };

        // Show en stylise the score résult
        console.log('Votre note total est de :' + totalPoints + ' / 60');
        console.log('Votre note pour Math et logique est de :' + pointMathLogique + ' / 10');
        console.log('Votre note la culture général est de :' + pointCltrG + ' / 40');
        console.log('Votre note la comprehenssion et l\'expression écrite est de :' + pointCmprEprvEcrt + ' / 10');

        score = (totalPoints * 100) / 60;
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