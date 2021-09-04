function operacion() {
    var sex = document.getElementById("operacionSelccionada").value;
    var age = document.getElementById("age").value;
    var resultado;

    if (sex === "Masculino") {
        var resultado = (210 - parseInt(age)) / 10;
        // alert(resultado)
    }
    if (sex === "Femenino") {
        var resultado = (220 - parseInt(age)) / 10;
        //alert(resultado)
    }

    document.getElementById("resultado").value = resultado;


}