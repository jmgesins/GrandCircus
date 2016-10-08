var inputUnit = "F";
var inputTemp = 75;

var outputTemp = (inputTemp -32)*(5/9);

if(inputUnit ==="F"){

	outputTemp = "The temperature of " +inputTemp + "is equal to" +(inputTemp -32)*(5/9) + "degrees celsius";

}
else if(inputUnit==="C"){
	outputTemp= "The temperature of " +inputTemp + "is equal to" (inputTemp * 9/5) + 32 + "degrees fahrenheit";
}

console.log(outputTemp);


