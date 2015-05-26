describe("Moment.js API addons",function(){
	var now, Month = {};

	now = moment();
	Month.FEBRUARY = 1;

	// add new matchers
	beforeEach(function(){});

	describe("A function should return last day of a specific month",function(){
		it("should get last day of feb 2012",function(){

			// expected date is 29 feb 2012
			var expected = moment("29-02-2012","DD-MM-YYYY");

			// given
			var result = moment().date(1).month(Month.FEBRUARY).year(2012).lastDayOfMonth();

			// then
			expect(result.date()).toBe(expected.date());
			expect(result.month()).toBe(expected.month());

		});
	});

	// ToDo write specs for
	//  before, after, equals and between methods

});
