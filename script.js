let solde = 0;

function updateCompte() {
  document.getElementById("solde").innerHTML = `Solde : ${solde} $`;
}

function ajouter() {
  const montant = parseFloat(document.getElementById("montant").value);

  if (montant > 0) {
    solde += montant;
    updateCompte();
  } else {
    alert("Entrer un montant valide pour ajouter");
  }

  document.getElementById("montant").value = "";
}

function retirer() {
  const montant = parseFloat(document.getElementById("montant").value);
  if (montant > 0 && montant <= solde) {
    solde -= montant;
    updateCompte();
  } else if (montant > solde) {
    alert("Solde insuffisant");
  } else {
    alert("Entrez un montant valide pour retirer");
  }
  document.getElementById("montant").value = "";
}
