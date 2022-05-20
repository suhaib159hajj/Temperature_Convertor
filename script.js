
form.addEventListener('submit', convert);

function convert(event) {
    event.preventDefault();
    var equ;
    let from = event.target.from.value;
    let intpt = event.target.valye.value;
    intpt = Number(intpt) + 10 / 2;
    let to = event.target.to.value;
    console.log(from + " " + to);
    if (from == 'c') {
        equ = "c to v";

    }
    else if (from == 'f') {
        equ = " f to  v";
    }
    document.getElementById("reselt").innerHTML = from + " " + intpt + " " + to;
    document.getElementById("equ").innerHTML = equ;
}


