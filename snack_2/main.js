/*
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
    Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/


const nomiNonFormattati = ['gianluca', "GABRIELE", "fABio", "NiCoLAS"]
    // creo una costante che avrà le stesse stringhe del'array sopra ed uso il ciclo map per fargli restituire quello che mi serve
const nomiFormattati = nomiNonFormattati.map((nomeFormattato) => {
    // faccio tornare le stringhe utilizzando .charAt(0) per prendere la prima lettera della parola e gli applico .toUpperCase() per renderla in maiuscolo ed aggiungo .substring(1) cioè dalla seconda lettera e gli applico .toLowerCase() per rendere tutte le lettere dalla seconda in poi minuscole
    return nomeFormattato.charAt(0).toUpperCase() + nomeFormattato.substring(1).toLowerCase()
})


console.log(nomiFormattati)