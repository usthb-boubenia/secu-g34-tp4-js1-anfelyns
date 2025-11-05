"use strict"; // Mode strict (Slide 51) : empeche la creation de variables globales implicites
// Exercice 3 : Deliberation sur les resultats des etudiants

/* 
 Donnees des etudiants (Slide 40 : Tableau d'objets)
 Ici on considere que le 4eme champ est Note1 et le 5eme est Note2
*/
const students = [
  { matricule: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
  { matricule: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
  { matricule: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

/*
 Fonction B (Slide 45 : Fonctions avec un return)
 Prend une seule valeur de type float (la MOYENNE calculee) retourne un booleen
*/
function B(moyenne) {
  return moyenne >= 10; // Slide 41 - Operateurs de comparaison
}

/* 
  Fonction A (Slide 45 : Fonctions sans parametres)
  Calcule la moyenne pour chaque etudiant puis appelle B avec cette moyenne
*/ 
function A() {
  // Boucle sur le tableau (Slide 44 : Boucles)
  students.forEach((etudiant) => {
    // Calcul de la moyenne selon la formule : (note1 + note2)/2 + 5
    const moyenne = (etudiant.note1 + etudiant.note2) / 2 + 5; // Slide 41 - Operateurs arithmetiques
    
    // Appel de la fonction B avec la MOYENNE calculee (un seul paramtre) -slide 45(Appel)
    const resultat = B(moyenne);

    // Operateur ternaire pour afficher le message (Slide 42 -condition ternaire)
    const message = resultat ? "ADMIS" : "AJOURNÉ";

    // Affichage dans la console (Slide 33-console.log())
    console.log(`${etudiant.matricule}: ${message}`); //(Slide 37 : affichage formate)
  }); 
} 
 