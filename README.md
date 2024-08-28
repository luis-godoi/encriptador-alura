<h1>🔐 Projeto de Encriptador </h1>

<h2>📝 Sobre</h2>
Este projeto é uma aplicação web simples que permite aos usuários criptografar e descriptografar textos utilizando um conjunto de regras pré-definidas. O objetivo é transformar o texto inserido em um formato codificado e permitir que ele seja decodificado posteriormente. A aplicação também impõe restrições quanto ao uso de caracteres, aceitando apenas letras minúsculas sem acentos e alertando o usuário caso caracteres especiais sejam inseridos.

## 🚀 Funcionalidades Principais
- **Criptografar Texto**: Converte o texto inserido em uma versão criptografada usando um padrão específico de substituição de caracteres.
- **Desencriptografar Texto**: Reverte o processo de criptografia, transformando o texto codificado de volta à sua forma original.
- **Cópia do Texto**: Permite copiar o texto criptografado ou descriptografado para a área de transferência.
- **Validação de Caracteres**: Gera um alerta caso o texto inserido contenha caracteres especiais.

<h3>💻 Tecnologias Utilizadas </h3>
<div>
  <img src="https://img.shields.io/badge/HTML-239120?style-for-the-badge&logo-html5&logoColor-white">
  <img src="https://img.shields.io/badge/CSS-239120?style-for-the-badge&logo-css3&logoColor-white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style-for-the-badge&logo-javascript&logoColor-black">
</div>

## ⚙️ Estrutura do Código
##### 1. `index.html`
- Contém a estrutura básica da página, incluindo as seções de entrada e saída de texto.
- Possui uma área de texto para inserção de texto, botões para criptografia e descriptografia, e uma área de saída onde o texto processado é exibido.
- Inclui um cabeçalho com a logo da Alura e um rodapé com os créditos do desenvolvedor.

##### 2. `style.css`
- Define o layout visual da aplicação, utilizando variáveis de cor para facilitar a manutenção do design.
- Estiliza os elementos principais, como áreas de texto, botões e mensagens de aviso.

##### 3. `script.js`
- Implementa a lógica da criptografia e descriptografia utilizando substituições simples de caracteres.
- Manipula o DOM para atualizar a interface conforme o usuário interage com a aplicação.
- Inclui validações para garantir que apenas letras minúsculas sem acento sejam aceitas.
