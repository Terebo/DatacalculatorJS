function calcDate(date, amountAdded) {
	let i;
	// split provided day into an array
	date = date.split(",")
	//figure out the number of days in the month
	var amaountOfDaysInMonths = new Date(date[2], date[1], 0).getDate();
	//do this the amount of days you want to add
	for (i = 0; i < amountAdded; i++) {
		//add one to the day
		date[0]++;
		//if day is higher than amount of days in the month, go to next month
		if (date[0] > amaountOfDaysInMonths) {
			date[0] = 0;
			date[1]++;
		}
		//if month is higher than 11(december), go to next year
		if (date[1] > 11) {
			date[1] = 0;
			date[2]++;
		}
	}
	//if the amount is added, return the new date
	if (i == amountAdded) {
		return(date.toString());
	}
}