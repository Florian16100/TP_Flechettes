var inquirer = require("inquirer");
const checkPlayersInStart = require('./checkPlayersInStart');

console.log("Voici votre jeu !")

var nombredejoueurs = []
var nomsjoueurs = []

class Game {
  selectJoueurs() {
    inquirer
      .prompt([
        {
        type: 'input',
        message: 'Entrer le nombre de joueur : ',
        name: 'nbPlayers',
        default: '2',
        validate: checkPlayersInStart,
        }
      ])
      .then(answers => {
        nombredejoueurs.push(answers.nbPlayers)
        console.log('Vous avez renseigner', nombredejoueurs, 'joueurs');
      })
  }
  selectNameJoueurs() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'Entrer le nom des joueurs',
        name: 'namePlayers',
      }
    ])
    .then(answers => {
      nomsjoueurs.push(answers.namePlayers)
      console.log(nomsjoueurs)
    })
  }
  lancerFlechette(){
      inquirer
      .prompt([
        {
          type: 'input',
            name: 'fleche1',
            message: 'Entrer le nombre que vous voulez faire :',
        },
        {
          type: 'input',
            name: 'fleche2',
            message: 'Score du joueur',
        },
        {
          type: 'input',
            name: 'fleche3',
            message: 'Entrer le nombre que vous voulez faire :',
        },
        {
          type: 'input',
            name: 'fleche4',
            message: 'Score du joueur',
        },
      ])
    }

  run() {
    this.selectJoueurs(this.selectNameJoueurs);
    this.selectJoueurs(this.selectlancerFlechette);
  }
}

const test = new Game()
test.run()