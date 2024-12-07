document.addEventListener('DOMContentLoaded', function(){
    var foutenLijstActief = false;
    // Var
    var checkedRadio = document.querySelector('input[name=vocabRadio]:checked');
    var multiRadioWrapper = document.getElementById("multiRadioWrapper");
    var wrongAnswerAudio = new Audio('wrongAnswer.mp3');
    wrongAnswerAudio.volume = 0.05
    var rightAnswerAudio = new Audio('rightAnswer.mp3');
    rightAnswerAudio.volume = 0.05

    // form input antwoord:
    var formulier = document.getElementById("formulier");
    var inputVeld = document.getElementById("invulVeld")

    // als er van de ene radio naar de andere radio moet veranderen is deze variabele om de 1ste te onthouden en zal gebruikt worden om die terug de juiste stijl te geven.
    var changedRadio = checkedRadio;
    var fransWoord = ''
    var nederlandsWoord = ''

    // VocabLijsten
    stringNLT1E1 = 'een toekomst, het vrijwilligerswerk (type 1 le b...), een vrijwilliger (type 1 un b...), een vrijwilligster (type 1 une b...), een zaak, een goede zaak, een oorzaak, een verandering, een leider, een leidster, de diversiteit, een engagement, iets waar je je voor inzet, het milieu, een generatie, een merk, een lid (mannelijk), een lid (vrouwelijk), een jeugdbeweging, een reden, een tendens, een trend, een vrijwilliger (type2 un v...), een vrijwilligster (type2 une v...), nuttig, handelen, bevestigen, bevestigd worden, beschouwen, zich beschouwen als, bouwen, opbouwen, uitdelen, zich engageren, zich inzetten, duwen, drijven tot, zich voelen, zin hebben, zin hebben (in/om), mensen ontmoeten, iemand een plezier doen, kortom, tweedehands, een ongelijkheid, de gerechtigheid, een inzameling, een dakloze (volledig), het vrijwilligerswerk (type 2 le v...), bewogen door (mannelijk), bewogen door (vrouwelijk), onmiddelijk / snel (mannelijk), onmiddelijk / snel (vrouwelijk), opvallend / opmerkelijk (mannelijk), opvallend / opmerkelijk (vrouwelijk), tijd besteden aan, bewegen om/tot, aansporen om/tot, iemand aanwerven, een boodschap overbrengen, tegenwoordig, nu'
    nlTour1Etape1 = stringNLT1E1.split(', ');
    stringFRT1E1 = 'un avenir, le bénévolat, un bénévole, une bénévole, une cause, une bonne cause, une cause, un changement, un chef, une cheffe, la diversité, un engagement, un engagement, l\'environement, une génération, une marque, un membre, une membre, un mouvement de jeunesse, une raison, une tendance, une tendance, un volontaire, une volontaire, utile, agir, confirmer, se confirmer, considérer, se considérer comme, construire, construire, distribuer, s\'engager, s\'engager, pousser, pousser à, se sentir, avoir envie, avoir envie de, faire des rencontres, faire plaisir à, bref, de seconde main, une inégalité, la justice, une récolte, un sans domicile fixe, le volontariat, animé par, animée par, immédiat, immédiate, marquant, marquante, consacrer à, engager à, engager à, engager quelqu\'un, faire passer un message, actuellement, actuellement'
    frTour1Etape1 = stringFRT1E1.split(', ');
    multiArrayT1E1 = [nlTour1Etape1, frTour1Etape1];


    stringNLT1E2 = 'een vereniging, een beweging (type 1 une a...), een verdediger, een verdedigster, een recht, de ecologie, een vorming, een educatie, een manifestatie, een betoging, een bedreiging, een beweging (type 2 un m...), de vervuiling, het racisme, een slogan, een leuze, het geweld, overtuigd van (mannelijk), overtuigd van (vrouwelijk), efficiënt, doeltreffend, feministisch, ongelooflijk, vrijwillig, verbeteren, strijden (type 1 se b...), vechten voor (type 1 se b...), vechten tegen (type1 se b...), overtuigen, verdedigen, hekelen, aanklagen, zich opwinden over, zich ergeren aan, zich zorgen maken over / om, strijden (type 2 l...), vechten voor (type 2 l...), vechten tegen (type2 l...), betogen, deelnemen aan (type 1 pa...), voorstellen om, eisen, recycleren, vertegenwoordigen, erin slagen te, lijden, steunen, ondersteunen, recht hebben op, gemeenschappelijk hebben, staken, zorg dragen voor, lessen missen, afval sorteren, ten voordele van, iets anders, een groei, de discriminatie, de mensheid, de junkfood, de spot, een weigering, soepel, vloeiend, verlaten, in de steek laten, toegeven aan, denken, menen, zich mobiliseren, ondergaan, de blik afwenden, vastberaden zijn om (mannelijk), vastberaden zijn om (vrouwelijk), zijn deel doen, tot actie overgaan, het woord nemen, deelnemen aan (type 2 pr...), een ... wending nemen (... letterlijk overnemen), zijn ecologische voetafdruk verkleinen, zich bewust zijn van, uit zijn confortzone treden, iemand te hulp komen';
    nlTour1Etape2 = stringNLT1E2.split(', ');
    stringFRT1E2 = 'une association, une association, un défenseur, une défenseuse, un droit, l\'ecologie, une éducation, une éducation, une manifestation, une manifestation, une menace, un mouvement, la pollution, le racisme, un slogan, un slogan, la violence, convaincu de, convaincue de, efficace, efficace, féministe, incroyable, volontaire, améloirer, se battre, se battre pour, se battre contre, convaincre, défendre, dénoncer, dénoncer, s\'enerver de, s\'enerver de, s\'inquiéter de, lutter, lutter pour, lutter contre, manifester, participer à, proposer de, réclamer, recycler, représenter, réussir à, souffrir, soutenir, soutenir, avoir droit à, avoir en commun, faire la grève, prendre soin de, rater des cours, trier des déchets, au profit de, autre chose, une croissance, la discrimination, l\'Humanité, la mallbouffe, la moquerie, un refus, fluide, fluide, abandonner, abandonner, céder à, estimer, estimer, se mobiliser, subir, détourner le regard, être déterminé à, être déterminée à, faire sa part, se mettre en action, prendre la parole, prendre part à, prendre un tournant ..., réduire son empreinte écologique, se rendre compte de, sortir de sa zone de confort, venir en aide à quelqu\'un';
    frTour1Etape2 = stringFRT1E2.split(', ');
    multiArrayT1E2 = [nlTour1Etape2, frTour1Etape2];

    stringNLT2E1 = 'een sticker, een brievenbus, een kartonnen doos, een online catalogus, een gift, schenking, een uitwisseling, een rek, de werking, het functioneren, een lampen slinger, het materiaal, een voorwerp, het delen, een pictogram, een penseel, een verborstel, het uitlenen, een wiel, een dienst, een deurbel, een bel, een stofzuiger, een keukenweegschaal, een weegschaal, een ladder, een strijkijzer, een grill, een barbecue, een zaklamp, een naaimachine, een hamer, een mixer, een taartvorm, een tuingereedschap, een gereedschap, een boormachine, een fietspomp, een zaag, een fondueset, een grasmachine, een schroevendraaier, stom, stevig, Zwitsers, plakken, bestellen, zich verbinden, verbinding maken, uitwisselen, iets van iemand (ont)lenen, lenen (type 1), aanmoedigen om, (weg)gooien, delen met, deelnemen aan, (uit)lenen aan, opruimen, (in elkaar) vijzen, een tak afzagen, een dienst vragen, een nagel inkloppen, een band oppompen, het gras maaien, af en toe, zelden, een raclettetoestel, een vergiet, de overconsumptie, schitterend (mannelijk), schitterend (vrouwelijk), zijn gezicht laten zien, in je buurt';
    nlTour2Etape1 = stringNLT2E1.split(', ');
    stringFRT2E1 = 'un autocollant, une boîte aux lettres, une boîte en carton, un catalogue en ligne, un don, un don, un échange, une étagère, le fonctionnement, le fonctionnement, une guirlande de lampes, le matériel, un objet, le partage, un pictogramme, un pinceau, un pinceau, un prêt, une roue, un service, une sonnette, une sonnette, un aspirateur, une balance de cuisine, une balance, une échelle, un fer à repasser, un grill, un grill, une lampe de poche, une machine à coudre, un marteau, un mixeur, un moule à gâteau, un outil de jardin, un outil, une perceuse, une pompe à vélo, une scie, un set à fondue, une tondeuse à gazon, un tournevis, bête, solide, suisse, coller, commander, se connecter, se connecter, échanger, emprunter quelque chose à quelqu\'un, emprunter, encourager à, jeter, partager avec, participer à, prêter à, ranger, visser, couper une branche, demander un service, enfoncer un clou, gonfler un pneu, tondre le gazon, de temps en temps, rarement, un four à raclette, une passoire, la surconsommation, lumineux, lumineuse, pointer le bout de son nez, autour de chez soi';
    frTour2Etape1 = stringFRT2E1.split(', ');
    multiArrayT2E1 = [nlTour2Etape1, frTour2Etape1];

    stringNLT2E2 = 'een activiteit, een hulp, een mening (type 1), een groepje, een vriendengroepje, een geluid, een lawaai, een gemeenschap, de energie, een ervaring, een handleiding, een aanbod, een mening (type 2), een organisator, een organisatrice, een particulier, een product, een spot, een projector, een inkomen, een technicus, een technica, favoriet (mannelijk), favoriet (vrouwelijk), technisch, waarderen, appreciëren, vaststellen, merken, functioneren, werken (in context van een machine), huren, beloven, bedriegen, het bevalt me, ik vind het leuk, een handje helpen, een bericht achterlaten, zijn hulp aanbieden, naar mijn mening, met plezier (versie 1), met plezier (versie 2), een goed, een financiële winst, een ruil(handel), een bedrog, erin slagen te, een beroep doen op, een blik werpen op';
    nlTour2Etape2 = stringNLT2E2.split(', ');
    stringFRT2E2 = 'une activité, une aide, un avis, une bande, une bande d\'amis, un bruit, un bruit, une communauté, l\'energie, une expérience, un manuel, une offre, une opinion, un organisateur, une organisatrice, un particulier, un produit, un projecteur, un projecteur, un revenu, un technicien, une technicienne, favori, favorite, technique, apprécier, apprécier, constater, constater, functionner, functionner, louer, promettre, tromper, ça me plait, ça me plait, donner un coup de main, laisser un message, offrir son aide, à mon avis, avec plaisir, volontiers, un bien, un gain financier, le troc, une tromperie, parvenir à, faire appel à, jeter un coup d\'oeil sur';
    frTour2Etape2 = stringFRT2E2.split(', ');
    multiArrayT2E2 = [nlTour2Etape2, frTour2Etape2];

    // Werkwoorden lijst
    stringNLWerkwoordLijst = 'vinden, geven (versie 1 d...), dansen, springen, praten, een hekel hebben aan, winnen, houden van, vragen, laten, blijven, denken aan, kijken, aankomen, dragen, binnenkomen, vallen, tonen, stoppen, naar boven gaan, luisteren, doorgaan, verdergaan, spelen, wandelen (versie 1 m...), voorstellen, werken, sluiten, vertellen, zingen, lachen met, uitlachen, zich amuseren, zich concentreren, zich interesseren, zich afvragen, zich verontschuldigen, ontmoeten, naar elkaar kijken, zich herinneren (versie 1 se r...), zich herinneren (versie 2 se s...), overwegkunnen met, zich haasten, zwijgen, vergeten, roepen, controleren, eten, wisselen, verbeteren, verhuizen, storen, zwemmen, bewegen, reizen, ordenen, opruimen, aankondigen, (uit)wissen, beginnen, werpen (versie 1 L...), gooien (versie 1 L...), plaatsen, vooruitgaan, kopen, opheffen, opstaan, meenemen, wandelen (versie 2 se p...), leiden, brengen, terugbrengen, vriezen, wegen, heten, terugbellen, gooien (versie 2 J...), werpen (versie 2 J...), gebruiken, proberen, poetsen, (in)drukken, opsturen, afvegen, zich vervelen, betalen, hopen, beschermen, herhalen, verkiezen, aanvullen, regelen, beëindigen, vullen, samenbrengen, nadenken, verdikken, vermageren, kiezen, applaudisseren, reageren, groeien, groter worden, slagen (in iets), gehoorzamen, verwittigen, straffen, garanderen, verrijken, verzwakken, definiëren, omschrijven, rood worden, blozen, verdiepen, genezen, bleek worden, overgeven, ouder worden, slopen, liegen, ruiken, voelen, opdienen, bedienen, serveren, uitgaan, slapen, vertrekken, openen, bedekken, ontdekken, offreren, geven (versie 2 o...), verwelkomen, plukken, afzien, lijden, teruggeven, verkopen, naar beneden gaan, horen, wachten, verliezen, antwoorden, afhangen van, smelten, maaien, verdedigen, hebben, zijn, gaan, kennen, zeggen, lezen, maken, doen, zetten, leggen, komen, worden, moeten (versie 1 d...), moeten (versie 2 enkel il vorm), kunnen, mogen, verkrijgen, ontvangen, weten, zien, willen, nemen, leren, begrijpen, vechten, slaan, verslaan, beloven, overhandigen, klagen, vrezen, uitzetten, uitschakelen, behalen, bereiken (versie 1 a...), schilderen, verven, toevoegen, bijvoegen, bereiken (versie 2 r...)'
    stringFRWerkwoordenLijst = 'trouver, donner, danser, sauter, parler, détester, gagner, aimer, demander, laisser, rester, penser, regarder, arriver, porter, entrer, tomber, montrer, arrêter, monter, écouter, continuer, continuer, jouer, marcher, présenter, travailler, fermer, raconter, chanter, se moquer, se moquer, s\'amuser, se concentrer, s\'intéresser, se demander, s\'excuser, se rencontrer, se regarder, se rappeler, se souvenir de, s\'entendre avec, se dépêcher, se taire, oublier, crier, vérifier, manger, changer, corriger, déménager, déranger, nager, bouger, voyager, ranger, ranger, annoncer, effacer, commencer, lancer, lancer, placer, avancer, acheter, lever, se lever, emmener, se promener, mener, mener, ramener, geler, peser, appeler, rappeler, jeter, jeter, employer, essayer, nettoyer, appuyer, envoyer, essuyer, s\'ennuyer, payer, espérer, protéger, répéter, préférer, compléter, régler, finir, remplir, réunir, réfléchir, grossir, maigrir, choisir, applaudir, réagir, grandir, grandir, réussir, obéir, avertir, punir, garantir, enrichir, faiblir, définir, définir, rougir, rougir, approfondir, guérir, pâlir, vomir, vieillir, démolir, mentir, sentir, sentir, servir, servir, servir, sortir, dormir, partir, ouvrir, couvrir, découvrir, offrir, offrir, accueillir, cueillir, souffrir, souffrir, rendre, vendre, descendre, entendre, attendre, perdre, répondre, dépendre, fondre, tondre, défendre, avoir, être, aller, connaître, dire, lire, faire, faire, mettre, mettre, venir, devenir, devoir, falloir, pouvoir, pouvoir, recevoir, recevoir, savoir, voir, vouloir, prendre, apprendre, comprendre, battre, battre, battre, promettre, remettre, se plaindre, craindre, éteindre, éteindre, atteindre, atteindre, peindre, peindre, joindre, joindre, rejoindre'
    nlWerkwoordenLijst = stringNLWerkwoordLijst.split(', ');
    frWerkwoordenLijst = stringFRWerkwoordenLijst. split(', ')
    multiArrayWerkwoordenLijst = [nlWerkwoordenLijst, frWerkwoordenLijst]
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
            foutenLijstActief = false;
        }else if(radioValue === 'vocabT1E2'){
            activeList = multiArrayT1E2;
            foutenLijstActief = false;
        }else if(radioValue === 'vocabT2E1'){
            activeList = multiArrayT2E1;
            foutenLijstActief = false;
        }else if(radioValue === 'vocabT2E2'){
            activeList = multiArrayT2E2;
            foutenLijstActief = false;
        }else if(radioValue === 'werkwoorden'){
            activeList = multiArrayWerkwoordenLijst;
            foutenLijstActief = false;
        }else if(radioValue === 'errors'){
            activeList = activeFoutenLijst;
            foutenLijstActief = true;
            console.log(activeList)
        }
        activeListLength = activeList[0].length;
        woordenGedaanUitActiveLijst = 0;
        woordenJuist = 0;
        getWorking()
    });

    // Moeten de soundeffects aanstaan?
    checkMuteKnop = document.getElementById('muteKnop');
    isMute = checkMuteKnop.checked;
    checkMuteKnop.addEventListener('change', function(){
        isMute = checkMuteKnop.checked;
        console.log(isMute);
        if(isMute){
            wrongAnswerAudio.volume = 0;
            rightAnswerAudio.volume = 0;
        }else{
            wrongAnswerAudio.volume = 0.05;
            rightAnswerAudio.volume = 0.05;
        }
    });
    // QuackMode?
    checkQuackKnop = document.getElementById('quackKnop');
    isQuack = checkQuackKnop.checked;
    checkQuackKnop.addEventListener('change', function(){
        isQuack = checkQuackKnop.checked;
        console.log(isQuack);
        if(isQuack){
            wrongAnswerAudio = new Audio('quack.mp3');
        }else{
            wrongAnswerAudio = new Audio('wrongAnswer.mp3');
            if(!isMute){
                wrongAnswerAudio.volume = 0.05;
            }else{
                wrongAnswerAudio.volume = 0;
            };
        };
    });

    // Bij opstart:
    getWorking()
    var woordenGedaanUitActiveLijst = 0
    var woordenJuist = 0

    formulier.addEventListener('submit', function(event){
        event.preventDefault();
        if(woordenGedaanUitActiveLijst < activeListLength){
            woordenGedaanUitActiveLijst++
            var ingevuldAntwoord = inputVeld.value;
            var juistOfFout = (checkCorrectInput(ingevuldAntwoord, fransWoord));
            rightAnswerAudio.pause();
            rightAnswerAudio.currentTime = 0;
            wrongAnswerAudio.pause();
            wrongAnswerAudio.currentTime = 0;
            showStats(juistOfFout, woordenGedaanUitActiveLijst, woordenJuist, activeListLength, ingevuldAntwoord, fransWoord, nederlandsWoord)
            getWorking()
            inputVeld.value = '';
        }else{
            document.getElementById('nederlandsWoord').innerHTML = 'Deze lijst is klaar, duid een andere lijst aan (of refresh) al wil je verder doen.'
        }
    });


    // Functions


    // controleer of de ingevulde waarde de juiste waarde is.
    function checkCorrectInput(ingevuldAntwoord, echtAntwoord){
        // spaties voor en na het antwoord verwijderen, en hoofdletters negeren.
        ingevuldAntwoord = ingevuldAntwoord.trim();
        ingevuldAntwoord = ingevuldAntwoord.toLowerCase();
        echtAntwoord = String(echtAntwoord)
        echtAntwoord = echtAntwoord.toLowerCase()

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
            rightAnswerAudio.play();
            document.getElementById('juistOfFout').innerHTML = 'Juist';
            document.getElementById('vorigInput').style.color = '#AAFF00';
            rightAnswerAudio.play();
        }else if(foutenLijstActief === true){
            wrongAnswerAudio.play();
            document.getElementById('juistOfFout').innerHTML = 'Fout';
            document.getElementById('vorigInput').style.color = '#EE4B2B';
            activeFoutenLijst[0].push(String(nederlandsWoord));
            activeFoutenLijst[1].push(String(juisteAntwoord));
            activeListLength++
        }else{
            wrongAnswerAudio.play();
            document.getElementById('juistOfFout').innerHTML = 'Fout';
            document.getElementById('vorigInput').style.color = '#EE4B2B';
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
