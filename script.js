
form.addEventListener('submit', convert);
function
    temperatureConverter(_intpt) {
    valNum = parseFloat(55);
    document.getElementById("outputCelsius").innerHTML = (55- 32) / 1.8;
}

function convert(event) {
    event.preventDefault();
    let equ;
    let conv;
    let res;
    let from = event.target.from.value;
    let intpt = event.target.valye.value;
    intpt = Number(intpt);
    let to = event.target.to.value;
    console.log(from + " " + to);
    switch (from) {
        case "°C":
             conv = intpt*(9 / 5) + 32;
            equ = " F = C(9/5) + 32 \n ";
            // res = conv.toString();
            break;
        case "°F":
            // conv = intpt(9 / 5) + 32;
            equ = " C = (F-32) (5/9) \n ";
            // res = "conv.toString()";
            break;
        case "°K":
            // conv = intpt(9 / 5) + 32;
            equ = "Celsius to Fahrenheit \n ";
            // res = "conv.toString()";
            break;
        case "°C":
            // conv = intpt(9 / 5) + 32;
            equ = "Celsius to Fahrenheit \n ";
            // res = "conv.toString()";
            break;
        default:

            break;
    }
    // if (from == '°C') {
    //     equ = "Celsius to Fahrenheit \n ";
    //  //   conv = Number(intpt(9 / 5) + 32);
    // }
    // else if (from == 'f') {
    //     equ = " f to  v";
    // }
    

    document.getElementById("reselt").innerHTML = " " + intpt + "" + from + "=" + conv + "" + to;
    document.getElementById("equ").innerHTML = equ;
    document.getElementById("conv").innerHTML = conv;

}
function fTo(inputDegreeValue,  DegreeType) { 
    let temperature = ''; 
    switch ( DegreeType) 
    {
    
    case "F" :
    temperature=inputDegreeValue;
    break;
    
    case'C' :
    temperature = eval((inputDegreeValue - 32)*(5/9));
    break;
    
    case 'K':
    temperature= eval((inputDegreeValue +459.67) * (5/9));
    break;
    }
    return temperature
    }



