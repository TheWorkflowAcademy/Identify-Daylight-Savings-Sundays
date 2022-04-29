//To produce a date range starting from the 2nd Sunday in March to the 1st Sunday of November in the year.
startDate = (today.getYear().toString() + "-03-01").toDate();
endDate = startDate.addMonth(8);
daylightSavingsStart = startDate.nextWeekDay("Sunday").addWeek(1);
daylightSavingsEnd = endDate.nextWeekDay("Sunday");
info "Start of March: " + startDate + " (" + startDate.toString("E") + ")" + " | " + "Daylight Savings Start: " + daylightSavingsStart + " (" + daylightSavingsStart.toString("E") + ")";
info "Start of November: " + endDate + " (" + endDate.toString("E") + ")" + " | " + "Daylight Savings End: " + daylightSavingsEnd + " (" + daylightSavingsEnd.toString("E") + ")";

//Create a list of dates for tests
//Test 01: Test if today falls under DST.
//Test 02: Test if Christmas Day falls under DST.
//Test 03: Test if 1st October falls under DST.
listDates = list();
listDates.add(today);

//Convert all hard coded YYYY-MM-DD to a Date data type.
listDates.add((today.getYear().toString()+"-12-25").toDate());
listDates.add((today.getYear().toString()+"-10-01").toDate());

//Run tests..
for each d in listDates{
	if(d >= daylightSavingsStart && d < daylightSavingsEnd){
		info d.toDate() + " falls under DST.";
	} else {
		info d.toDate() + " does not fall under DST.";
	}
}