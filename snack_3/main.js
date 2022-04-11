/*
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:
    [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]
    Crea un nuovo array con la lista dei mammiferi.
*/


const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'ippopotamo', famiglia: 'hippopotamidae', classe: 'mammiferi' },
    { nome: 'pipistrello', famiglia: 'vespertilionidae', classe: 'mammiferi' },
    { nome: 'biscia', famiglia: 'colubridi', classe: 'rettili' },
    { nome: 'squalo', famiglia: 'chondrichthyes', classe: 'pesci cartilaginei' },
    { nome: 'aquila', famiglia: 'accipitridae', classe: 'uccelli' },
    { nome: 'coccodrillo', famiglia: 'crocodilidi', classe: 'rettili' }
]
console.log("tutti gli animali")
console.log(animali)

// creo una costante che sarà il mio array di mammiferi

const mammiferi = animali.filter((animale) => animale.classe == "mammiferi")
console.log("tuttii mammiferi")
console.log(mammiferi)

// creo un ciclo forEach per ciclare singolarmente ogni animale nell'array "mammiferi" e stamparli in console
mammiferi.forEach(element => {
    console.log("____________________")
    console.log(`${element.nome} è della specie ${element.classe}`)
});