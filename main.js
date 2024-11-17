document.addEventListener('DOMContentLoaded', function(){
    // Var
    var checkedRadio = document.querySelector('input[name=vocabRadio]:checked');
    var multiRadioWrapper = document.getElementById("multiRadioWrapper");
    var wrongAnswerAudio = new Audio('wrongAnswer.mp3');
    wrongAnswerAudio.volume = 0.05
    var rightAnswerAudio = new Audio('rightAnswer.mp3')
    rightAnswerAudio.volume = 0.05

    // form input antwoord:
    var formulier = document.getElementById("formulier");
    var inputVeld = document.getElementById("invulVeld")

    // als er van de ene radio naar de andere radio moet veranderen is deze variabele om de 1ste te onthouden en zal gebruikt worden om die terug de juiste stijl te geven.
    var changedRadio = checkedRadio;
    var fransWoord = ''
    var nederlandsWoord = ''

    // VocabLijsten
    stringNLT1E1 = 'een toekomst, het vrijwilligerswerk, een vrijwilliger (type 1), een vrijwilligster (type 1), een zaak, een goede zaak, een oorzaak, een verandering, een leider, een leidster, de diversiteit, een engagement, iets waar je je voor inzet, het milieu, een generatie, een merk, een lid (mannelijk), een lid (vrouwelijk), een jeugdbeweging, een reden, een tendens, een trend, een vrijwilliger (type2), een vrijwilligster (type2), nuttig, handelen, bevestigen, bevestigd worden, beschouwen, zich beschouwen als, bouwen, opbouwen, uitdelen, zich engageren, zich inzetten, duwen, drijven tot, zich voelen, zin hebben, zin hebben (in/om), mensen ontmoeten, iemand een plezier doen, kortom, tweedehands, een ongelijkheid, de gerechtigheid, een inzameling, een dakloze (volledig), het vrijwilligerswerk (type 2), bewogen door (mannelijk), bewogen door (vrouwelijk), onmiddelijk / snel (mannelijk), onmiddelijk / snel (vrouwelijk), opvallend / opmerkelijk (mannelijk), opvallend / opmerkelijk (vrouwelijk), tijd besteden aan, bewegen om/tot, aansporen om/tot, iemand aanwerven, een boodschap overbrengen, tegenwoordig, nu'
    nlTour1Etape1 = stringNLT1E1.split(', ');
    stringFRT1E1 = 'un avenir, le bénévolat, un bénévole, une bénévole, une cause, une bonne cause, une cause, un changement, un chef, une cheffe, la diversité, un engagement, un engagement, l\'environement, une génération, une marque, un membre, une membre, un mouvement de jeunesse, une raison, une tendance, une tendance, un volontaire, une volontaire, utile, agir, confirmer, se confirmer, considérer, se considérer comme, construire, construire, distribuer, s\'engager, s\'engager, pousser, pousser à, se sentir, avoir envie, avoir envie de, faire des rencontres, faire plaisir à, bref, de seconde main, une inégalité, la justice, une récolte, un sans domicile fixe, le volontariat, animé par, animée par, immédiat, immédiate, marquant, marquante, consacrer à, engager à, engager à, engager quelqu\'un, faire passer un message, actuellement, actuellement'
    frTour1Etape1 = stringFRT1E1.split(', ');
    multiArrayT1E1 = [nlTour1Etape1, frTour1Etape1];


    stringNL1E2 = 'een vereniging, een beweging, een verdediger, een verdedigster, een recht, de ecologie, een vorming, een educatie, een manifestatie, een betoging, een bedreiging, een beweging, de vervuiling, het racisme, een slogan, een leuze, het geweld, overtuigd van (mannelijk), overtuigd van (vrouwelijk), efficiënt, doeltreffend, feministisch, ongelooflijk, vrijwillig, verbeteren, strijden (type 1), vechten voor (type 1), vechten tegen (type1), overtuigen, verdedigen, hekelen, aanklagen, zich opwinden over, zich ergeren aan, zich zorgen maken over / om, strijden (type 2), vechten voor (type 2), vechten tegen (type2), betogen, deelnemen aan, voorstellen om, eisen, recycleren, vertegenwoordigen, erin slagen te, lijden, steunen, ondersteuenen, recht hebben op, gemeenschappelijk hebben, staken, zorg dragen voor, lessen missen, afval sorteren, ten voordele van, iets anders, een groei, de discriminatie, de mensheid, de junkfood, de spot, een weigering, soepel, vloeiend, verlaten, in de steek laten, toegeven aan, denken, menen, zich mobiliseren, ondergaan, de blik afwenden, vastberaden zijn om (mannelijk), vastberaden zijn om (vrouwelijk), zijn deel doen, tot actie overgaan, het woord nemen, deelnemen aan, een ... wending nemen (... letterlijk overnemen), zijn ecologische voetafdruk verkleinen, zich bewust zijn van, uit zijn confortzone treden, iemand te hulp komen';
    nlTour1Etape2 = stringNL1E2.split(', ');
    stringFRT1E2 = 'une association, une association, un défenseur, une défenseuse, un droit, l\'ecologie, une éducation, une éducation, une manifestation, une manifestation, une menace, un mouvement, la pollution, le racisme, un slogan, un slogan, la violence, convaincu de, convaincue de, efficace, efficace, féministe, incroyable, volontaire, améloirer, se battre, se battre pour, se battre contre, convaincre, défendre, dénoncer, dénoncer, s\'enerver de, s\'enerver de, s\'inquiéter de, lutter, lutter pour, lutter contre, manifester, participer à, proposer de, réclamer, recycler, représenter, réussir à, souffrir, soutenir, soutenir, avoir droit à, avoir en commun, faire la grève, prendre soin de, rater des cours, trier des déchets, au profit de, autre chose, une croissance, la discrimination, l\'Humanité, la mallbouffe, la moquerie, un refus, fluide, fluide, abandonner, abandonner, céder à, estimer, estimer, se mobiliser, subir, détourner le regard, être déterminé à, être déterminée à, faire sa part, se mettre en action, prendre la parole, prendre part à, prendre un tournant ..., réduire son empreinte écologique, se rendre compte de, sortir de sa zone de confort, venir en aide à quelqu\'un';
    frTour1Etape2 = stringFRT1E2.split(', ');
    multiArrayT1E2 = [nlTour1Etape2, frTour1Etape2];

    nlTour2Etape1 = new Array('');
    frTour2Etape1 = new Array('');
    
    nlTour2Etape2 = new Array('');
    frTour2Etape2 = new Array('');
    
    // uit welke lijst er woorden moeten gehaald worden (waar ze ook in worden verwijderd).
    activeList = multiArrayT1E1
    activeListLength = activeList[0].length
    activeFoutenLijst = [[],[]];



    // Als er een verandering is bij de radio's, verandert de woordenlijst.
    multiRadioWrapper.addEventListener('change', function(){
        checkedRadio = document.querySelector('input[name=vocabRadio]:checked');
        radioValue =  checkedRadio.value;
        checkedRadio.parentNode.classList.add("radioWrapperChecked");
        // Remove the previous checked radio style:
        changedRadio.parentNode.classList.remove("radioWrapperChecked");
        changedRadio = checkedRadio;
        if(radioValue === 'vocabT1E1'){
            activeList = multiArrayT1E1;
        }else if(radioValue === 'vocabT1E2'){
            activeList = multiArrayT1E2;
        }else if(radioValue === 'vocabT2E1'){
        }else if(radioValue === 'vocabT2E2'){
        }else if(radioValue === 'errors'){
            activeList = activeFoutenLijst;
            console.log(activeList)
        }
        activeListLength = activeList[0].length;
        woordenGedaanUitActiveLijst = 0;
        woordenJuist = 0;
        getWorking()
    });

    // Bij opstart:
    getWorking()
    var woordenGedaanUitActiveLijst = 0
    var woordenJuist = 0

    formulier.addEventListener('submit', function(event){
        event.preventDefault();
        woordenGedaanUitActiveLijst++
        var ingevuldAntwoord = inputVeld.value;
        var juistOfFout = (checkCorrectInput(ingevuldAntwoord, fransWoord));
        rightAnswerAudio.pause();
        rightAnswerAudio.currentTime = 0;
        wrongAnswerAudio.pause();
        wrongAnswerAudio.currentTime = 0;
        showStats(juistOfFout, woordenGedaanUitActiveLijst, woordenJuist, activeListLength, ingevuldAntwoord, fransWoord, nederlandsWoord)
        if(woordenGedaanUitActiveLijst >= activeListLength){
            document.getElementById('nederlandsWoord').innerHTML = 'Deze lijst is klaar, duid een andere lijst aan (of refresh) al wil je verder doen.'
        }else{
            getWorking()
        }
        inputVeld.value = '';
    });


    // Functions


    // controleer of de ingevulde waarde de juiste waarde is.
    function checkCorrectInput(ingevuldAntwoord, echtAntwoord){
        // spaties voor en na het antwoord verwijderen, en hoofdletters negeren.
        ingevuldAntwoord = ingevuldAntwoord.trim();
        ingevuldAntwoord = ingevuldAntwoord.toLowerCase();

        if(ingevuldAntwoord == echtAntwoord){
            woordenJuist++
            return true;
        }else{
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
    function showStats(juistOfFout, woordenGedaanUitActiveLijst, woordenJuist, lijstLengte, vorigeInput, juisteAntwoord, nederlandsWoord){
        if(juistOfFout === true){
            document.getElementById('juistOfFout').innerHTML = 'Juist';
            document.getElementById('vorigInput').style.color = '#AAFF00';
            rightAnswerAudio.play();
        }else{
            document.getElementById('juistOfFout').innerHTML = 'Fout';
            document.getElementById('vorigInput').style.color = '#EE4B2B';
            wrongAnswerAudio.play();
            activeFoutenLijst[0].push(String(nederlandsWoord))
            activeFoutenLijst[1].push(String(juisteAntwoord));
        }
        document.getElementById('vorigNederlandsWoord').innerHTML = String(nederlandsWoord[0]);
        document.getElementById('aantalWoordenGedaan').innerHTML = (String(woordenGedaanUitActiveLijst) + '/' + String(lijstLengte));
        document.getElementById('accuracy').innerHTML = (woordenJuist/woordenGedaanUitActiveLijst * 100).toFixed(2) + '%' + ' (' + String(woordenJuist) + '/' + String(woordenGedaanUitActiveLijst) + ')';
        document.getElementById('vorigInput').innerHTML = vorigeInput;
        document.getElementById('vorigJuisteAntwoord').innerHTML = juisteAntwoord;
    }
});
// https://stackoverflow.com/questions/7317273/warn-user-before-leaving-web-page-with-unsaved-changes
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'your progress will be lost';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});
