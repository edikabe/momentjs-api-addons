describe("Moment.js Prototypes new functions",function(){
	var now, Month = {};

	now = moment();
	Month.FEBRUARY = 1;

	// add new matchers
	beforeEach(function() {
	  this.addMatchers({
	    toBeTheSameDay: function(expected) {
	      return this.actual.equals(expected);
	    }
	  });
	});

	describe("A function should return last day of a specific month",function(){
		it("should get last day of feb 2012",function(){

			// expected date is 29 feb 2012
			var expected = moment().date(29).month(Month.FEBRUARY).year(2012);
			var result = moment().date(1).month(Month.FEBRUARY).year(2012).lastDayOfMonth();
			
			expect(result).toBeTheSameDay(expected);
		});
	});

	// ToDo write specs for 
	//  before, after, equals and between methods
		
});