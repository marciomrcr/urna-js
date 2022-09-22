let seuVotoPara = window.document.querySelector(".d1-1 span");
//let seuVotoPara = document.getElementById("d1-left-1 span");
let cargo = window.document.querySelector(".d1-left-2 span");
let descricao = window.document.querySelector(".d1-left-4");
let aviso = window.document.querySelector(".d2");
let lateral = window.document.querySelector(".d1-image");
let numeros = window.document.querySelector(".d1-left-3");

let etapaAtual = 0;
let numero = "";

function iniciarEtapa() {
  let fase = etapas[etapaAtual];
  let numeroHtml = "";

  for (let i = 0; i < fase.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
  }

  seuVotoPara.style.display = "none";
  cargo.innerHTML = fase.titulo;
  descricao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML = "";
  numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
  let fase = etapas[etapaAtual];
  let candidato = fase.candidatos.filter((item) => {
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });
  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome}<br />Partido: ${candidato.partido}`;

    let fotosHtml = "";
    for (let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHtml += `<div class="d1-image small">
      <img src="images/${candidato.fotos[i].url}" alt="gov" />${candidato.fotos[i].legenda}
    </div>`;
      } else {
        fotosHtml += `<div class="d1-image">
      <img src="images/${candidato.fotos[i].url}" alt="gov" />${candidato.fotos[i].legenda}
    </div>`;
      }
    }

    lateral.innerHTML = fotosHtml;
  } else {
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `<div class="aviso--grande pisca">Voto Nulo</div>`;
  }
}

function clicou(n) {
  let elNumero = window.document.querySelector(".numero.pisca");
  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;

    elNumero.classList.remove("pisca");
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add("pisca");
    } else {
      atualizaInterface();
    }
  }
}

function branco() {
  alert("Clicou em BRANCO ");
}
function corrige() {
  alert("Clicou em CORRIGE ");
}
function confirma() {
  alert("Clicou em CONFIRMA ");
}

iniciarEtapa();
