const form = document.querySelector(".form-quizz");
let tableauResultats = [];
const reponses = ['b','c','b','b','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector(`.resultats h2`);
const noteResultat = document.querySelector(`.note`);
const aideResultat = document.querySelector(`.aide`);
const toutesLesQuestions = document.querySelectorAll(`.question-block`);
let verifTableau= [];


form.addEventListener('submit', (e) => {
    var el = document.querySelector(".maclasse")
    e.preventDefault();
   // On parcours les réponses de form de q1 à q5
    for (i=1; i<6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    
    verifFunc(tableauResultats);
    // On reinitailise le tableau
    tableauResultats = [];

})

/// Tableau qui vérifie les réponses et les garde en boolean dans verfiTableau

function verifFunc(tabResultats) {
    for (let a = 0 ; a < 5 ; a++){
        if (tabResultats[a] === reponses[a]){
            verifTableau.push(true);

        } else {
            verifTableau.push(false);
        } 
    }
    afficherResultat(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

// Afficher aide et texte dans le dom
function afficherResultat(tabCheck){
   const nbrDeFautes = tabCheck.filter(el => el !== true).length;
    //console.log(nbrDeFautes);
    switch(nbrDeFautes) {

        case 0:
            titreResultat.innerText = `✔️ Well done, it's flawless! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ You are almost there! ✨`
            aideResultat.innerText = 'Try another answer in the red box, then re-validate!'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Another effort ... 👀`
            aideResultat.innerText = 'Try another answer in the red boxes, then re-validate!'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 There are still some errors. 😭`
            aideResultat.innerText = 'Try another answer in the red boxes, then re-validate!'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Can do better ! 😭`
            aideResultat.innerText = 'Try another answer in the red boxes, then re-validate!'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Can do better ! 👎`
            aideResultat.innerText = 'Try another answer in the red boxes, then re-validate!etentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, unexpected case. ';

    }


}

function couleursFonction(tabValBool){
    for (let j = 0 ; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
    
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');
            
            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
                
            }, 500);
        }

    }
}

toutesLesQuestions.forEach( item => {

    item.addEventListener('click', () => {
        item.style.background = "white";
    })
      

})