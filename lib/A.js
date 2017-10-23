const timeout = ms => new Promise(res => setTimeout(res, ms))

class A {

	constructor(name) {
		this.name = name;
	}

	async hello() {
		await timeout(200)
		return `hi, ${this.name}!`;
	}

}

module.exports = A;
