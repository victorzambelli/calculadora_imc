function calcImc() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var imc = weight / height ** 2;
    var text = ""
    
    if (imc < 18.5) {
        text = `Seu IMC é de: ${imc.toFixed(1)} \nAbaixo de 18.5 \nAbaixo do Peso`
    } else if (imc < 24.9) {
        text = `Seu IMC é de: ${imc.toFixed(1)} \nAbaixo de 24.9 \nPeso Normal`
    } else if (imc < 29.9) {
        text = `Seu IMC é de: ${imc.toFixed(1)} \nIMC entre 25.0 e 29.9 \nSobrepeso`
    } else if (imc < 39.9) {
        text = `Seu IMC é de: ${imc.toFixed(1)} \nIMC entre 30.0 e 34.9 \nObesidade`
    } else if (imc > 39.9) {
        text = `Seu IMC é de: ${imc.toFixed(1)} \nIMC acima de 40.0 \nObesidade Mórbida`
    } else {
        text = 'Preencha todos os campos!!!';
    }

    document.getElementById("resultado").innerText = text
}
