// Carne - 400gr por pessoa - Se passar de 6hrs - 650gr
// Cerveja - 10 latinhas por pessoa - Se passar de 6hrs 18 latinhas
// Refrigerante - 0,5L por criança - Se passar de 6hrs 1L
// Criança valem 0,5 na carne


var adultos = document.getElementById("adulto");
var criancas = document.getElementById("crianca");
var duracao = document.getElementById("duracao");


function calcular(){
    
    let img01 = document.getElementById("img01");
    img01.style.display = "inline-block";
    let img02 = document.getElementById("img02");
    img02.style.display = "inline-block";
    let img03 = document.getElementById("img03");
    img03.style.display = "inline-block";
    
    let cont01 = document.getElementById("container");
    cont01.style = "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;";

    let cont03 = document.getElementById("container2");
    cont03.style = "background-color: #ffffffbb";

    resposta1.innerHTML = carnePP().toFixed(3) + "Kg de Carne.";
    resposta2.innerHTML = cervejaPP() + " latas de cerveja(s).";
    resposta3.innerHTML = Math.ceil(refriPP()) + "L de refrigerante(s).";
}

function onMouseOver(){
    let botao = document.getElementById("botao");
    botao.style.backgroundColor = "#ffffffbb";
    botao.style.color = "black";
    
}

function onMouseOut(){
    let botao = document.getElementById("botao");
    botao.style.backgroundColor = "black";
    botao.style.color = "white";
}

function carnePP() {
    if (duracao.value < 6) {
        return (adultos.value * 0.4) + ((criancas.value / 2) * 0.4);
    } else {
        return (adultos.value * 0.65) + ((criancas.value / 2) * 0.65);
    }
}

function cervejaPP() {
    if (duracao.value < 6) {
        return adultos.value * 10;
    } else {
        return adultos.value * 18;
    }
}

function refriPP() {
    if (duracao.value < 6) {
        return (criancas.value * 0.5) + (adultos.value * 0.5);
    } else {
        return (criancas.value * 0.75) + (adultos.value * 0.75);
    }
}