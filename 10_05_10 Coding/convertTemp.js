function convertTemp (inputTemp, inputUnit) {
  var outputTemp = (inputTemp -32)*(5/9);

if(inputUnit ==="F"){
 outputTemp = (inputTemp -32) * (5/9); 
 console.log("temperature of " + inputTemp + "degrees fahrenheit is equal to " + outputTemp + "degrees in Celsius");
	
}
else if(inputUnit==="C"){
	outputTemp = (inputTemp *9/5) + 32;
	console.log("temperature of " + inputTemp + "degrees Celsius is equal to " + outputTemp + "degrees in Fahrenheit");
}

console.log(outputTemp);
}
convertTemp(212 , "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(-40, "F");