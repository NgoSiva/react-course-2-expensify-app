/*const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const { name: fristName = 'Anonymous', age } = person;
console.log(`${fristName} is ${age}.`);

const { temp: temperature, city } = person.location;
console.log(`It's ${temperature} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);*/


const address = ['31 avenue de la paix', 'Tremblay', 'Seine-Saint-Denis', '93290'];
const [, city, state = "val d'oise"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Cofee (hot)', '$2.00', '$2.50', '$2.75'];
const [ itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);