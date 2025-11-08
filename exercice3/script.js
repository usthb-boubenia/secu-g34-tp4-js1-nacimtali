"use strict";
//declaration tableau students (slide40 )
const Students = [
    { id:1000,
      nom: "DOE",
      prenom: "JOHN",
      note1:14,
      note2:5 },

    { id:2000,
      nom: "CARLTON",
      prenom: "BOB",
      note1:7,
      note2:1 },

    { id:3000,
      nom: "SMITH",
      prenom: "RAYANE",
      note1: 13,
      note2: 3 }
];
function A(){
    //boucle foreach (slide 44)
    Students.forEach(s => {
        //calcule de la moyenne 
        let moyenne = (s.note1 + s.note2) / 2 + 5;
        //on envoie le resultat a la fct B 
        B(moyenne);
        if(B(moyenne)){
            //if true 
            console.log(s.id + ": ADMIS");
        } else {
            //if false 
            console.log(s.id + ": AJOURNE");
        }
    });
}
//fonction B qui verifie si la moyenne est superieur ou egale a 10
function B(moyenne ){
  if(moyenne >= 10){
    return true ;}
    else{ return false ;}
}