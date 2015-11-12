
import seedrandom from 'seedrandom';
import uuid from 'node-uuid';

let variants = ['a', 'b', 'c'];

for (let i=0; i<10000; i++) {
	
	let user = { uuid: uuid.v4() };
	
	let index = Math.floor(seedrandom(user.uuid + 'abc')() * variants.length);
	
	console.log(`${user.uuid}, ${index}`);

}
