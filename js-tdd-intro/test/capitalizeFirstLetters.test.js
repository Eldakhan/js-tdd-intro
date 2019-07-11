// test/capitalizeFirstLetters.test.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
	it('is a function that accepts one argument', () => {
		assert.strictEqual(typeof capitalizeFirstLetters, 'function');
		assert.strictEqual(capitalizeFirstLetters.length, 1);
	});
	
	it('works for an empty string', () => {
		assert.strictEqual(capitalizeFirstLetters(''), '');
	});
	
	it('works for a 1-character string', () => {
		assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
	});
	
	it('works for one string', () => {
		assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
	});
	
	it('works for "i am learning TDD"', () => {
		assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
	});
});