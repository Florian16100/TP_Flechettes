// var inquirer = require('inquirer');
// var Players = require ('../models/Player');


// console.log('A vos flèches !');

// var nbPlayers = null;
// var TabPlayers = [];
// var Mode = null;

// function randPlayers (TabPlayers){
//   const randomName = TabPlayers[Math.floor(Math.random() * TabPlayers.length)];
//   console.log(`C'est à ${randomName} de commencer`)
// }

// function checkPlayersInStart (nombre) {
//   if(nombre > 1 && nombre < 5) {
//     return true;
//   } else {
//     return "Entrer un nombre compris entre 2 et 4";
//   }
// }

// var questionJoueurs = [
//   {
//     type: 'input',
//     name: 'nbPlayers',
//     message: 'Entrer le nombre de players',
//     default: '2',
//     validate: checkPlayersInStart,
//   }
// ]

// var questionNomJoueurs = []

// var choiceMode = [
//   {
//     type: 'list',
//     name: 'modeGame',
//     message: 'Choisisez le mode de jeux',
//     choices: ['Tour du monde', '301', 'Cricket']

//   }
// ]

// inquirer.prompt(questionJoueurs).then(answers => {
//   nbPlayers = answers.nbPlayers;
//   for (var i = 0; i < nbPlayers; i++) {
//     questionNomJoueurs.push({
//       type: 'input',
//       name: 'namePlayers'+(i+1),
//       message: 'Entrer le nom du joueur'+(i+1)
//     })
//   }
//   inquirer.prompt(questionNomJoueurs).then(answers => {
//     for (var namePlayers in answers) {
//       let players = new Players(answers[namePlayers]);
//       console.log(players)
//       TabPlayers.push(answers[namePlayers]);
//   }
//     inquirer.prompt(choiceMode).then(answers => {
//       Mode = answers.modeGame
//       if(Mode === 'Tour du monde'){
//         console.log(`Vous avez choisi le ${Mode}`)
//       } else if(Mode === "301"){
//         console.log(`Vous avez choisi le ${Mode}`)
//       } else {
//         console.log(`Vous avez choisi le ${Mode}`)
//       }
//       randPlayers(TabPlayers);
//     })
//   })
// });