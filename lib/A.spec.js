var A = require("./A");
var should = require("should");

describe("A", function() {

	before(function() {
		this.name = "Daniel"
		this.instance = new A(this.name);
	})

	it("#hello()", async function() {
		var response = await this.instance.hello();
		should(response).be.a.String();
		response.indexOf(this.name).should.not.be.exactly(-1);
	})

})
