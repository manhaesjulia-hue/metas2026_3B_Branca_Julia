const botoes = document.querySelectorAll("[class^='botao']");
const textos = document.querySelectorAll("[class^='aba-conteudo']");

for (let i = 0; i < botoes.length; i++){
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++){
        // CORREÇÃO 2: Ajustado para usar os nomes exatos das classes do seu HTML
        botoes[j].classList.remove("botao-ativo");
        botoes[j].classList.add("botao");
        
        textos[j].classList.remove("aba-conteudo-ativo");  
        textos[j].classList.add("aba-conteudo");  
    }
    // Adiciona o estado ativo no botão e na aba clicada
    botoes[i].classList.remove("botao");
    botoes[i].classList.add("botao-ativo");
  
    textos[i].classList.remove("aba-conteudo");
    textos[i].classList.add("aba-conteudo-ativo");
  }  
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-07-04T00:00:00");
const tempoObjetivo2 = new Date("2027-01-10T00:00:00");
const tempoObjetivo3 = new Date("2026-12-18T00:00:00");
const tempoObjetivo4 = new Date("2027-04-09T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Nota: A função calculaTempo foi mantida aqui caso você a use em outro lugar, 
// mas o seu cronômetro principal usa a atualizaCronometro.
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos +