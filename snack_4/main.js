/*
    Crea un array di oggetti che rappresentano delle persone.
    Ogni persona ha un nome, un cognome e un’età.
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

// creazione array con le specifiche delle persone
const users = [
    { nome: "Gianluca", cognome: "Giovannini", anni: 29 },
    { nome: "Alessio", cognome: "Riccardi", anni: 29 },
    { nome: "Lorenzo", cognome: "Grassi", anni: 28 },
    { nome: "Desiree", cognome: "Vorraso", anni: 25 },
    { nome: "Leonardo", cognome: "Materazzi", anni: 17 },
    { nome: "Matteo", cognome: "Paggini", anni: 15 },
    { nome: "Cristian", cognome: "Quadri", anni: 15 }
]


// creo una costante che sarà il mio nuovo array
// creo un ciclo .map per ciclare tutti oggetti e aggiungere una nuova "key" e "valure" al ritorno
const canGuide = users.map(user => {
    console.log("oggetto dell'array")
    console.log(user)
        // creo una nuova "key" + "valore" per inizializzarla
    user.guidatore = " "
        // creo una condizione dove cambio il valore della "key" guidatore in base all'età 
    if (user.anni <= 18) {
        user.guidatore = "Non può guidare"
    } else {
        user.guidatore = "Può guidare"
    }
    // faccio tornare il singolo oggetto user nell'array
    return user
})

console.log("array nuovo con aggiunta di una nuova 'key':'valore'")
console.log(canGuide)

// creo un ciclo forEach per mostrare a schermo ogni singolo oggetto
canGuide.forEach(user => {
    console.log(`${user.nome} ${user.guidatore} perchè ha ${user.anni} anni`)

});