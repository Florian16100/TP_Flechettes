const db = require('sqlite')

module.exports = {

  getPlayer(){
    return db.run('SELECT * FROM Player')
  }

}