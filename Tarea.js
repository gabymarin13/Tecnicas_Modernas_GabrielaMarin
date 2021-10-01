//TAREA 1 
//
//Ejercicio 1------------------

const letters = ['a','a','b','c','c','d','e','e'];

function consecutiveDuplicates(letters){
    //const newDuplic = []
    //const amount = 1
    //const currentLetter
    for (let index = 0; index < letters.length; index++){
        if(letters[index] === letters[index+1]){
            console.log(letters[index]);
            console.log(letters[index+1]);
            //currentLetter = letters [index]
            //amount++
            //newDuplic.push(letters[index])
        }     
        index++
    }
    return console.log(consecutiveDuplicates);
    
}


//Ejercicio 2---------------------

let array = ['a', 'g', 7.1, [5, 2], [['k',6], ['p']]];
function flatten(array) {
    const flattenArray  = [];
    !(function flat(array) {
      array.forEach(function(length) {
        if (Array.isArray(length)) flat(length);
        else flattenArray.push(length);
      });
    })(array);
    return console.log(flattenArray);
}



//Ejercicio 3---------------------

const words = ['right','up','soul','down','left','vibe'];
let goal1 = 'up';
let goal2 = 'vibe';

function findGoalWords(words, goal1, goal2){
    for (const value of words) {
        if(words.includes(goal1) || words.includes(goal2)) {
          const goalWordsFound =  [];
          words.find(goal1);
          goalWordsFound.push(goal1);
          words.find(goal2);
          goalWordsFound.push(goal2);
          console.log(goalWordsFound);
          //falta redefinir
       }       
    }
 }
 
 console.log(findGoalWords(words,goal1,goal2));




 //Ejercicio 4---------------------
 let num = 9119;
 function elevNumber(num){
    let numString = num + "";
    let total = "";
    for(let index in numString){
      total += (parseInt(numString[index])**2 + "");
    }
    return console.log(parseInt(total));
  }
