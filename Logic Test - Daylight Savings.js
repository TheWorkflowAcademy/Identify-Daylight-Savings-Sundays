//Loop through n-number of years..
listIterator = repeat(",",9);
n=0;
listDates = list();

listPeriodType = {"Start","End"};
listDataType = {"Raw","DST"};
strMessageBreak = repeat("=",50);

//Compile data..
for each i in listIterator{
	intYear = today.getYear()+n;
	dateStart = (intYear + "-03-01").toDate();
	dateEnd = dateStart.addMonth(8);
	daylightSavingsStart = dateStart.nextWeekDay("Sunday").addWeek(1);
	daylightSavingsEnd = dateEnd.nextWeekDay("Sunday");
	n=n+1;
// 	listDates.add({listPeriodType.get(0):{listDataType.get(0):dateStart,listDataType.get(1):daylightSavingsStart},listPeriodType.get(1):{listDataType.get(0):dateEnd,listDataType.get(1):daylightSavingsEnd}});
	rawMap = map();
	rawMap.put({listPeriodType.get(0):{listDataType.get(0):dateStart,listDataType.get(1):daylightSavingsStart}});
	rawMap.put({listPeriodType.get(1):{listDataType.get(0):dateEnd,listDataType.get(1):daylightSavingsEnd}});
	listDates.add(rawMap);
}

//Run tests for n-number of years..
for each periodType in listPeriodType{

	info listDates.get(0).get(periodType).get(listDataType.get(0)).toString("MMMM") + " Details:";
	info strMessageBreak;
	info "Year | First day of the Month | DST |";
	info strMessageBreak.replaceAll("=", "-");
	for each d in listDates{
		strMessage=d.get(periodType).get(listDataType.get(0)).toString("YYYY") +" | ";
		for each keyType in listDataType{
			strMessage = strMessage + d.get(periodType).get(keyType).toString("dd/MM/yy (E)") + " | ";
		}
		strMessage = left(strMessage, strMessage.len()-1);
		info strMessage;
	}
	info strMessageBreak;
}