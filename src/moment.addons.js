/////////////////////////////////////////////////////
// prototype functions, augments momentjs capacities
/////////////////////////////////////////////////////
(function(moment){

	/**
	 * Get last day of month from instanciated momentjs date
	 */
	moment.fn.lastDayOfMonth = function(){
		return this.add('months', 1).date(0);
	}

	/**
	 * Tests if this date is after the specified date.
	 */
	moment.fn.before = function(comparedDate){
		return this.diff(comparedDate) < 0;
	}

	/**
	 * Tests if this date is after the specified date.
	 */
	moment.fn.after = function(comparedDate){
		return this.diff(comparedDate) > 0;
	}

	/**
	 * Compares two dates for equality.
	 */
	moment.fn.equals = function(comparedDate){
		return this.diff(comparedDate) === 0;
	}

	/**
	 * Is the date between a range of dates(inclusive).
	 */
	moment.fn.between = function(start,end){
		return ((this.equals(start)||this.equals(end)) || (this.after(start) && this.before(end))) ? true : false;
	}

})(moment);
