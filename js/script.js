

document.getElementById("gioca").addEventListener("click", function(){
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  } //mi serve per generare i numeri del tiro dei dadi
  var myNumber = getRndInteger(1, 6);
  console.log(myNumber);
  var pcNumber = getRndInteger(1, 6);
  console.log(pcNumber); // dichiaro le variabili che conterranno un numero random fra 1 e 6
  var result = document.getElementById("risultato"); // dove comparirà il risultato di vittoria, pareggio o sconfitta
  var pMyNumber = document.getElementById("pMyNumber");
  var pPcNumber = document.getElementById("pPcNumber"); // dichiarazioni relative ai tag p che conterranno il risultato ottenuto, rispettivamente, dall'utente e dal computer nel lancio dei dadi
  pMyNumber.innerHTML = "Il tuo numero è: " + myNumber;
  pPcNumber.innerHTML = "Il numero del computer è: " + pcNumber; // al click, compaiono 2 stringhe che comunicano quanto ha fatto l'utente e quanto il computer, al lancio dei dadi
  if (myNumber > pcNumber){
    result.innerHTML = "Hai vinto!";
  } else if (pcNumber > myNumber) {
    result.innerHTML = "Hai perso!";
  } else {
    result.innerHTML = "Pareggio!";
  }
});
