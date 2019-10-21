var valor1;
var valor2;
var operador;
var resultado;

function teclaNumerica(numero) {

    if (resultado == null) {
        document.getElementById("visor").value = document.getElementById("visor").value + numero;
    } else {

        document.getElementById("visor").value = document.getElementById("visor").value + numero;
    }

}

function teclaFuncao(operacao) {

    if (operador == null) {
        valor1 = document.getElementById("visor").value;
        operador = operacao;
        document.getElementById("visorOperacao").value = valor1 + operador;
        document.getElementById("visor").value = '';
    } else {
        valor1 = resultado;
        operador = operacao;
        document.getElementById("visorOperacao").value = valor1 + operador;
        document.getElementById("visor").value = '';
    }
}

function limpar() {
    document.getElementById("visor").value = '';
    document.getElementById("visorOperacao").value = '';
    operador = null;
    valor1 = null;
    valor2 = null;
    resultado = null;
}

function igual() {

    if (operador == null && valor2 == null) {
        document.getElementById("visor").value = document.getElementById("visor").value;
    } else {
        if (resultado != null) {
            valor1 = resultado;
            document.getElementById("visorOperacao").value = valor1 + operador + valor2;
            resultado = calcular(operador, valor1, valor2);
            document.getElementById("visor").value = resultado;
        } else {
            valor2 = document.getElementById("visor").value;
            document.getElementById("visorOperacao").value = valor1 + operador + valor2;
            resultado = calcular(operador, valor1, valor2);
            document.getElementById("visor").value = resultado;
        }
    }
}

function calcular(operador, valor1, valor2) {

    switch (operador) {
        case "+":
            final = parseFloat(valor1) + parseFloat(valor2);
            return final;
        case "-":
            final = parseFloat(valor1) - parseFloat(valor2);
            return final;
        case "*":
            final = parseFloat(valor1) * parseFloat(valor2);
            return final;
        case "/":
            final = parseFloat(valor1) / parseFloat(valor2);
            return final;
    }
}

function salvarDados() {

    var lista_dados = [];

    lista_dados[0] = document.getElementById("nome").value
    lista_dados[1] = document.getElementById("sobrenome").value
    lista_dados[2] = document.getElementById("cargo").value
    lista_dados[3] = document.getElementById("email").value
    lista_dados[4] = document.getElementById("admissao").value
    lista_dados[5] = document.getElementById("salario").value
    lista_dados[6] = document.getElementById("desconto").value

    localStorage.setItem("lista_dados_envio", JSON.stringify(lista_dados));
}

function recuperarDados() {

    var lista_dados = JSON.parse(localStorage.getItem("lista_dados_envio"));

    document.getElementById("nome").value = lista_dados[0];
    document.getElementById("sobrenome").value = lista_dados[1];
    document.getElementById("cargo").value = lista_dados[2];
    document.getElementById("email").value = lista_dados[3];
    document.getElementById("admissao").value = lista_dados[4];
    document.getElementById("salario").value = lista_dados[5];
    document.getElementById("desconto").value = lista_dados[6];
}