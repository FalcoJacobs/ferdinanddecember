document.addEventListener('DOMContentLoaded', function(){
    
    // Var
    var checkedRadio = document.querySelector('input[name=vocabRadio]:checked');
    var multiRadioWrapper = document.getElementById("multiRadioWrapper");

    // form input antwoord:
    var formulier = document.getElementById("formulier");
    var inputVeld = document.getElementById("invulVeld")

    // als er van de ene radio naar de andere radio moet veranderen is deze variabele om de 1ste te onthouden en zal gebruikt worden om die terug de juiste stijl te geven.
    var changedRadio = checkedRadio;
    var fransWoord = ''
    var nederlandsWoord = ''

    // VocabLijsten
    stringNLT1E1 = 'een toekomst, het vrijwilligerswerk, een vrijwilliger (type 1), een vrijwilligster (type 1), een zaak, een goede zaak, oorzaak, een verandering, een leider, een leidster, de diversiteit, een engagement, iets waar je je voor inzet, het milieu, een generatie, een merk, een lid (mannelijk), een lid (vrouwelijk), een jeugdbeweging, een reden, een tendens, een trend, een vrijwilliger (type2), vrijwilligster (type2)'
    nlTour1Etape1 = stringNLT1E1.split(', ');
    stringFRT1E1 = 'un avenir, le bénévolat, un bénévole, une bénévole, une cause, une bonne cause, une cause, un changement, un chef, une cheffe, la diversité, un engagement, un engagement, l\'environement, une génération, une marque, un membre, une membre, un mouvement de jeunesse, une raison, une tendance, une tendance, un volontaire, une volontaire'
    frTour1Etape1 = stringFRT1E1.split(', ');
    multiArrayT1E1 = [nlTour1Etape1, frTour1Etape1];


    nlTour1Etape2 = new Array('');
    frTour1Etape2 = new Array('');
    
    nlTour2Etape1 = new Array('');
    frTour2Etape1 = new Array('');
    
    nlTour2Etape2 = new Array('');
    frTour2Etape2 = new Array('');
    
    // uit welke lijst er woorden moeten gehaald worden (waar ze ook in worden verwijderd).
    activeList = multiArrayT1E1



    // Als er een verandering is bij de radio's, verandert de woordenlijst.
    multiRadioWrapper.addEventListener('change', function(){
        checkedRadio = document.querySelector('input[name=vocabRadio]:checked');
        radioValue =  checkedRadio.value;
        checkedRadio.parentNode.classList.add("radioWrapperChecked");
        // Remove the previous checked radio style:
        changedRadio.parentNode.classList.remove("radioWrapperChecked");
        changedRadio = checkedRadio;
    });

    // Bij opstart:
    getWorking()

    formulier.addEventListener('submit', function(event){
        event.preventDefault();

        var ingevuldAntwoord = inputVeld.value;
        console.log(checkCorrectInput(ingevuldAntwoord, fransWoord));
        getWorking()
        inputVeld.value = '';
    });


    // Functions


    // controleer of de ingevulde waarde de juiste waarde is.
    function checkCorrectInput(ingevuldAntwoord, echtAntwoord){
        // spaties voor en na het antwoord verwijderen, en hoofdletters negeren.
        ingevuldAntwoord = ingevuldAntwoord.trim();
        ingevuldAntwoord = ingevuldAntwoord.toLowerCase();

        if(ingevuldAntwoord == echtAntwoord){
            return true;
        }else{
            console.log(ingevuldAntwoord);
            console.log(echtAntwoord);
            return false;
        }
    };


    // krijg een random woord uit de actieve lijst.
    function randomWordFromList(){
        // random getal van 0 tot lengte van array
        randomNummer = getRandomInt(activeList[1].length);
        var nederlands = activeList[0].splice(randomNummer,1);
        var frans = activeList[1].splice(randomNummer,1);
        return [nederlands, frans];
    };
    // geeft een random nummer van 0 tot het max aantal dat gegeven is.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    function getWorking(){
        randomWoordArray = randomWordFromList();
        nederlandsWoord = randomWoordArray[0];
        fransWoord = randomWoordArray[1];
        document.getElementById('nederlandsWoord').innerHTML = nederlandsWoord;
    }
});
