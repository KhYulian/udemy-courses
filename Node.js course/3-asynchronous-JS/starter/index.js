const fs = require('fs');
const superagent = require('superagent');

function readFilePromise(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) reject(`I could not find that file 😞`);

			resolve(data);
		});
	});
}
function writeFilePromise(file, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, data, err => {
			if (err) reject('Could not write file 😞');

			resolve('success');
		});
	});
}
///////////////////////////////////////////////
// Solution 1
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
// 	superagent
// 		.get(`https://dog.ceo/api/breed/${data}/images/random`)
// 		.end((err, data) => {
// 			console.log(data.body.message);

// 			fs.writeFile('dog-img.txt', data.body.message, err => {
// 				if (err) return console.log(`${err.message}`);

// 				console.log('Random dog image have been written to file');
// 			});
// 		});
// });

///////////////////////////////////////////////
// Solution 2
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
// 	superagent
// 		.get(`https://dog.ceo/api/breed/${data}/images/random`)
// 		.then(result => {
// 			console.log(result.body.message);

// 			fs.writeFile('dog-img.txt', result.body.message, err => {
// 				if (err) return console.log(err.message);
// 				console.log('Random dog image saved to file');
// 			});
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// });

///////////////////////////////////////////////
// Solution 3
// readFilePromise(`${__dirname}/dog.txt`)
// 	.then(data => {
// 		return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
// 	})
// 	.then(result => {
// 		console.log(result.body.message);

// 		return writeFilePromise('dog-img.txt', result.body.message);

// 		// fs.writeFile('dog-img.txt', result.body.message, err => {
// 		// 	if (err) return console.log(err.message);
// 		// 	console.log('Random dog image saved to file');
// 		// });
// 	})
// 	.then(() => {
// 		console.log(`Random dog image saved to file`);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

///////////////////////////////////////////////
// async / await

// async function automatically returns a promise
async function getDogPic() {
	try {
		const data = await readFilePromise(`${__dirname}/dog.txt`);
		console.log(`Breed: ${data}`);

		const res1Promise = superagent.get(
			`https://dog.ceo/api/breed/${data}/images/random`
		);
		const res2Promise = superagent.get(
			`https://dog.ceo/api/breed/${data}/images/random`
		);
		const res3Promise = superagent.get(
			`https://dog.ceo/api/breed/${data}/images/random`
		);

		const all = await Promise.all([res1Promise, res2Promise, res3Promise]);
		const imgs = all.map(el => `${el.body.message}\n`).join('');

		console.log(imgs);

		await writeFilePromise('dog-img.txt', imgs);
		console.log(`Random dog image save to file`);
	} catch (error) {
		console.error(error);
		throw error;
	}
	return `2: READY 🐶`;
}
getDogPic();

// (async () => {
// 	try {
// 		console.log('1: Will get dog pics!');

// 		const x = await getDogPic();
// 		console.log(x);

// 		console.log('3: Done getting dog pics!');
// 	} catch (err) {
// 		console.log('ERROR 💥');
// 	}
// })();

// console.log('1: Will get dog pics!');
// getDogPic()
// 	.then(x => {
// 		console.log(x);
// 		console.log('3: Done gettion pics!');
// 	})
// 	.catch(err => console.log(err));
