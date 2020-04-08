database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

//database.ref('notes/-M4KL1-q2UG8PIeeYfNj').remove()

// database.ref('notes').push({
//     title: 'Second note!',
//     body: 'This my note'
// });

// database.ref().on('value', (snapshot) => {
//     const { name, job: { company, title } } = snapshot.val();
//     console.log(`${name} is a ${title} at ${company}`)
// })

// setTimeout(() => {
//     database.ref('job/company').set('Afflelou');
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fectching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(27);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);


// setTimeout(() => {
//     database.ref('age').set(30);
// }, 9000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Siva Ngo',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Softaware developper',
//         company: 'Google'
//     },
//     location: {
//         city: 'Paris',
//         country: 'France'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });


// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed!');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });