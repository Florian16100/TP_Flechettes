module.exports = function boucleNamePlayers (nombre) {
  if(nombre > 1 && nombre < 9) {
    return "yes";
  } else {
    return "no";
  }
}