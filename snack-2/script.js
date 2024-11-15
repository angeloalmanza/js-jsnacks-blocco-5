const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let result = '';

people.forEach(({name}, i) => {
  result += `${name}`;
  if(i < people.length - 1){
    result += `, `;
  }
})

console.log(result);