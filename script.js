const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
var mensagemVazia = document.getElementById("nenhuma_mensagem");
var mensagemVaziaDetalhada = document.getElementById("nenhuma_mensagem_detalhada");

function botaoEncriptar() {
  const textoEncriptado = criptografar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";

  if (textoEncriptado === "") {
    document.querySelector(".mensagem").style.backgroundImage = 'url(assets/imagem-lupa.png)';
    mensagemVazia.textContent = "Nenhuma mensagem encontrada";
    mensagemVaziaDetalhada.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    document.querySelector()
  } 
  else {
    document.querySelector(".mensagem").style.backgroundImage = 'none';
    mensagemVazia.textContent = "";
    mensagemVaziaDetalhada.textContent = "";
  }
}

function criptografar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();
  if (/[^\w\s]/.test(stringEncriptada)) {
    alert('Não são aceitos caracteres especiais!');
    return "";
  }
  
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  let botaocopiar = document.getElementById("botao-copiar")
  botaocopiar.innerHTML = 'Copiar'
  return stringEncriptada;
}

function botaoDesencriptar() {
  const textoDesencriptado = Desencriptografar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";

  if (textoDesencriptado === "") {
    document.querySelector(".mensagem").style.backgroundImage = 'url(assets/imagem-lupa.png)';
    mensagemVazia.textContent = "Nenhuma mensagem encontrada";
    mensagemVaziaDetalhada.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    document.querySelector()
  } 
  else {
    document.querySelector(".mensagem").style.backgroundImage = 'none';
    mensagemVazia.textContent = "";
    mensagemVaziaDetalhada.textContent = "";
  }
}

function Desencriptografar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  let botaocopiar = document.getElementById("botao-copiar")
  botaocopiar.innerHTML = 'Copiar'
  return stringDesencriptada;
}

function botaocopiar() {
  navigator.clipboard.writeText(document.querySelector(".mensagem").value)

  let copiar = document.getElementById("botao-copiar")
  copiar.innerHTML = 'Copiado'
  copiar.addEventListener('mouseleave', ()=>{copiar.innerText = 'Copiar'})
}