"use strict"; // Mode strict (slide 51) : empeche la creation de variables globales implicites
// Exo2

/* slide 36 (syntaxe commentaires sur plusieurs lignes)
  Fonction f1() (Slide 45 - Fonctions sans parametre) 
  Afficher un tableau simple (Slide 38)
*/
function f1() {
  // Declaration d'un tableau d'etudiants (Slide 38 : Types complexes - Tableaux)
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; 
  // Parcours du tableau a l’aide d’une boucle forEach (Slide 44 : Boucles)
  etudiants.forEach((etudiant) => {
    console.log(etudiant); // Affichage dans la console (Slide 33 : console.log)
  });
}

/* 
  Fonction f2() (Slide 45 - Fonctions sans parametre) 
   Afficher un objet simple (Slide 39)
*/
function f2() {
  // Declaration d’un objet etudiant (Slide 39 : Objets)
  const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
  };
  console.log(etudiant); // Affichage de l’objet complet (Slide 33 : console.log)
}

/*
  Fonction f3() (Slide 45 - Fonctions sans parametre)
  Afficher un tableau d’objets (Slides 40 et 44)
*/ 
function f3() {
  // Declaration d’un tableau d’objets etudiants (Slide 40 : Tableau d'objets)
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 }, 
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
  // Parcours avec forEach (Slide 44 : Boucles)
  etudiants.forEach((etudiant) => {
    // Utilisation des templates literals (Slide 37 : affichage formate)
    console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
  });
}
