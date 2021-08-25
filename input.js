// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(name => {
//     console.log(`??? ${name}`);
//     readline.close()
// })

// const prompt = require('prompt');

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {
//     if (err) { return onErr(err); }
//     console.log('Command-line input received:');
//     console.log('  Username: ' + result.username);
//     console.log('  Email: ' + result.email);
// });

// function onErr(err) {
//     console.log(err);
//     return 1;
// }



// const readline = require('readline');
// const readlineInterface = readline.createInterface(process.stdin, process.stdout);

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve);
//   });
// }

// start();

// async function start() {
//   let name = await ask('What is your name? ');
//   let quest = await ask('What is your quest? ');
//   let color = await ask('What is your favorite color? ');
//   console.log('Hello ' + name + '! ' +
//     'Good luck with ' + quest + ', ' +
//     'and here is a ' + color + ' flower for you.');
//   process.exit();
// }