const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let result = '';

names.forEach((curItem, i) => {
    result += `${curItem}`;
    if(i < names.length - 1){
        result += `, `;
    }
})

console.log(result);