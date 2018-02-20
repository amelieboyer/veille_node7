"use strict"
const tableau = require('./tableaux.js')
const max = tableau.length
const prenom = tableau.prenom
const nom = tableau.nom
const telephone = tableau.telephone
const courriel = tableau.courriel
//console.log('prenom= ' + prenom)
//console.log('nom=' + nom)
//console.log('telephone=' + telephone)
//console.log('courriel=' + courriel)
const peupler_json = () => {

	let position;
	let tab = [];
	//let tabPrenom = [];
	//let tabNom = [];
	//let tabTelephone = [];
	//let tabCourriel = [];


	for(let i=0; i<10; i++){

		position = Math.floor(Math.random() *max)
		tab.push(tableau[position])



	}

return(tab)

}

module.exports = peupler_json