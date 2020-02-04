module.exports = function checkPlayersInStart (nombre) {
  if(nombre > 2 && nombre < 5) {
    return true;
  } else {
    return "Entrez un nombre entre 2 et 5, merci !";
  }
}

