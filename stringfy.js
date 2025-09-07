const names = ["steve bill", "bill gates", "elon musk"];

const jsonString = JSON.stringify(names);

console.log(jsonString);




const names2 = `["steve", "gates", "musk"]`;
const parseData = JSON.parse(names2);
console.log(parseData);
