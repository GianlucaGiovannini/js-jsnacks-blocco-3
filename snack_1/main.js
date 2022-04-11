/* 
    Descrizione:
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
    Infine stampa separatamente i 3 array.
*/

const automobili = [{
        marca: "fiat",
        modello: "fisarominica",
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: "astratta",
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: "cinquecento",
        alimentazione: "diesel"
    },
    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "gpl"
    },
    {
        marca: "ferrari",
        modello: "boh",
        alimentazione: "elettrico"
    },
    {
        marca: "ferrari",
        modello: "f81",
        alimentazione: "elettrico"
    },
    {
        marca: "ferrari",
        modello: "enzo",
        alimentazione: "benzina"
    },
    {
        marca: "seat",
        modello: "cupa",
        alimentazione: "diesel"
    }, {
        marca: "seat",
        modello: "leon",
        alimentazione: "metano"
    },
    {
        marca: "seat",
        modello: "ibiza",
        alimentazione: "diesel"
    }
];
console.log(automobili)

const autoBenzina = automobili.filter((automobile) => automobile.alimentazione == "benzina")
console.log(autoBenzina)

/* const autoBenzina = automobili.filter((automobile) => {
    if (automobile.alimentazione == "benzina") {
        return true;
    }
    return false
})
console.log(autoBenzina) */

const autoDiesel = automobili.filter((automobile) => automobile.alimentazione == "diesel")
console.log(autoDiesel)

/* const autoDiesel = automobili.filter((automobile) => {
    if (automobile.alimentazione == "diesel") {
        return true;
    }
    return false
})
console.log(autoDiesel) */

const autoDiverse = automobili.filter((automobile) => automobile.alimentazione == "gpl" || automobile.alimentazione == "elettrico" || automobile.alimentazione == "metano")
console.log(autoDiverse)

/* const autoDiverse = automobili.filter((automobile) => {
    if (automobile.alimentazione == "gpl" || automobile.alimentazione == "elettrico" || automobile.alimentazione == "metano") {
        return true;
    }
    return false
})
console.log(autoDiverse) */