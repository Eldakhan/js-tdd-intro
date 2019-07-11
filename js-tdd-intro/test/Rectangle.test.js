// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
	it('.isSquare() returns true when it is a square', () => {
		const rectangle = new Rectangle(5, 5);
		assert.strictEqual(rectangle.isSquare(), true);
	});
	
	it('.isSquare() returns false when it is not a square', () => {
		const rectangle = new Rectangle(10, 5);
		assert.strictEqual(rectangle.isSquare(), false);
	});
	
	it('.getArea() returns area', () => {
		const rectangle = new Rectangle(13, 7);
		assert.strictEqual(rectangle.getArea(), 91);
	});
	
	it('.getPerimeter() returns perimeter', () => {
		const rectangle = new Rectangle(13, 7);
		assert.strictEqual(rectangle.getPerimeter(), 40);
	});
});