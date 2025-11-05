"use strict"; // Mode strict (slide 51) : empeche la creation de variables globales implicites

// Exercice 1 - Declaration des variables (Slide 37)
const nom = "John"; //chaine de caractere
const prenom = "Doe"; //chaine de caractere
const age = 30; //entier
const note = 15; //reel
const PI = 3.14; 

//Fonction F1 - Affiche le nom (Slide 45 - Fonctions)
//declaration d'une fonction sans parametres
function f1() {
    console.log(nom); // Slide 33 - console.log()
} 


//Fonction F2 (Slide 45 - Fonctions) Affiche le prenom 
//declaration d'une fonction sans parametres
function f2() {
    console.log(prenom); // Slide 33 - console.log()
}

/* slide 36 (syntaxe commentaires sur plusieurs lignes)
   Fonction F3 -(Slide 45 - Fonctions sans parametres)
    Affiche le nom et prenom (Slide 37 - Concatenation)
 */
function f3() {
    console.log(nom + "-" + prenom); // Concatenation de chaines (affichage elabore)
}

/*
  Fonction F4 - (Slide 45 - Fonctions sans parametre)
  Affiche l'age (Slide 37 - Types Number)
 */
function f4() {
    console.log(age); 
}

/*
  Fonction F5 -(Slide 45 - Fonctions sans parametre)
   Affiche la note (Slide 37 - Types Number)
 */
function f5() { 
    console.log(note); 
}

/*
  Fonction F6 - (Slide 45 - Fonctions sans parametre)
  Affiche la valeur de PI (Slide 37 - Constantes)
 */
function f6() {
    console.log(PI);    
} 