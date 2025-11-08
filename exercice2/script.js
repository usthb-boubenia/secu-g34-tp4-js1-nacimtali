"use strict";

//declaration du tableau Etudiant (slide 38)
 let Etudiants  = ["Etudiant1", "Etudiant2", "Etudiant3"];
//declaration de l'objet Etudiant (slide 39)
const Etudiant ={
    nom: "John",
    prenom: "Doe",
    age: 30
};
//declaration tableau objet etudiants (slide40)
const listeEtudiants = [
    { nom: "nom1",
      prenom: "prenom1",
      age: 21 },
    { nom: "nom2",
      prenom: "prenom2",
      age: 22 },
    { nom: "nom3",
      prenom: "prenom3",
      age: 23 }
];

// declaration des fonctions (slide 45)
 //console.log(""); permet d'afficher des informations dans la console du navigateur (slide36)
 function f1(){
    //boucle forEach (slide44)
    Etudiants.forEach(e => console.log(e));
 }
 function f2(){

    console.log(Etudiant);
 }
 function f3(){
    //boucle forEach (slide44)
    listeEtudiants.forEach(e => {
        console.log(`${e.nom}-${e.prenom}-${e.age}`);
    });
 }
