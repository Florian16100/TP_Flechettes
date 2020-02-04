var inquirer = require('inquirer');

console.log('Bienvenue sur la partie engine');

function checkPlayersInStart (nombre) {
  if(nombre > 2 && nombre < 5) {
    return true;
  } else {
    return "Entrer un nombre compris entre 2 et 5";
  }
}

var questions = [
  {
    type: 'input',
    name: 'nbPlayers',
    message: 'Entrer le nombre de players',
    default: '2',
    validate: checkPlayersInStart,
  },
  {
    type: 'input',
    name: 'namePlayers',
    message: 'Entrer le nom des joueurs',
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));
});

// selectNameJoueurs() {
//   inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'Entrer le nom des joueurs',
//       name: 'namePlayers',
//     }
//   ])
//   .then(answers => {
//     nomsjoueurs.push(answers.namePlayers)
//     console.log(nomsjoueurs)
//   })
// }

// //lancerFlechette(){
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//           name: 'fleche1',
//           message: 'Entrer le nombre que vous venez de faire :',
//       },
//       {
//         type: 'input',
//           name: 'fleche2',
//           message: 'Entrer le nombre que vous venez de faire :',
//       },
//       {
//         type: 'input',
//           name: 'fleche3',
//           message: 'Score du joueur',
//       },
//     ])
//   }

//   run() {
//   this.selectJoueurs(this.selectNameJoueurs);
//   this.selectJoueurs(this.selectlancerFlechette);
//   }


// const test = new Game()
// test.run()
