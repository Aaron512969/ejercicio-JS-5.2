function init_maxim(){

    let numer1 = +document.getElementById("num1").value;
    let numer2 = +document.getElementById("num2").value;

    if (numer1 > numer2) {
        document.getElementById("texto").innerHTML = numer1
    }

    else if (numer1 < numer2) {
        document.getElementById("texto").innerHTML = numer2
    }

}
