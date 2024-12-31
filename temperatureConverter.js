// screw the html and css, you can make that, yes?

const GET_ELEMNT = document.getElementById("typeTemp"); // the first input element
GET_ELEMNT.focus();

function CalcTemp() {
    const TYPE_TEMP = GET_ELEMNT.value;
    const TEMPERATURE = +document.getElementById("temp").value; // using the "+" to convert to number on the spot
    const CONVERT_TEMP = document.getElementById("convertTemp").value;
    const END_IT = document.getElementById("END");

    let getCelcius = calcCelcius(CONVERT_TEMP, TEMPERATURE);
    let getFahren = calcFahenheit(CONVERT_TEMP,TEMPERATURE);
    let getKelvin = calcKelvin(CONVERT_TEMP, TEMPERATURE);

    if(TYPE_TEMP == "" || TEMPERATURE == "" || CONVERT_TEMP == "") {
	    window.alert("Please, insert the value on all box corretly!");
    } else {
        if(TYPE_TEMP == "ºC") {
            END_IT.innerHTML = `<p>The temperature is ${getCelcius} ${CONVERT_TEMP}</p>`
        };

        if(TYPE_TEMP == "ºF") {
            END_IT.innerText = `The temperature is ${getFahren} ${CONVERT_TEMP}`
        };

        if(TYPE_TEMP == "K") {
            END_IT.innerText(`The temperature is ${getKelvin} ${CONVERT_TEMP}`)
        };
    };

}

function calcCelcius(temperatureType, celciusValue, convertedValue) {

    if(temperatureType == "ºF") {
	// this is converting Celcius to Fahrenheit

        convertedValue = celciusValue * 1.8 + 32; // I don't know if I wawnt to let this way or just do this: "return convertedValue = celciusValue * 1.8 + 32"
        return convertedValue;
    } else {
	// this is converting Celcius to Kelvin

        convertedValue = celciusValue + 273;
        return convertedValue;
    };

}

function calcFahenheit(temperatureType, fahrenValue, convertedValue) {

    if(temperatureType == "ºC") {
	// this is converting Fahrenheit to Celcius
        convertedValue  = Math.round((fahrenValue - 32) / 1.8);

        return convertedValue
    } else {
	// this is converting Fahrenheit to Kelvin
        convertedValue = Math.round(((fahrenValue - 32) * 5 / 9) + 273);

        return convertedValue;
    };
}

function calcularKelvin(temperatureType, kelvinValue, convertedValue) {
    if(temperatureType == "ºC") {
	// this is converting Kelvin to Celcius
        convertedValue = kelvinValue - 273;
        
        return convertedValue;
    } else if(temperatureType == "ºF") {
	// this is converting Kelvin to Fahrenheit
        convertedValue = Math.round((kelvinValue - 273) * 1.8 + 32);
        
        return convertedValue;
    };
}

/**

    @author: ghostlyTrinket
    @lastEditedTime: 14:30
    
    did i forget something?
    did i made something wrong that i didn't catch?

    Please, let me know!

*/