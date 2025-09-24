// Declaração do array que armazenará os nomes
const nomes = [];

// Função pra adicionar um nome à lista
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  // Validação da entrada
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome ao array
  nomes.push(nome);

  // Limpa o campo de entrada
  input.value = "";

  // Atualiza a lista
  atualizarLista();
}

// Função pra atualizar a lista exibida na tela
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ""; // Limpa a lista atual

  for (let i = 0; i < nomes.length; i++) {
    const item = document.createElement('li');
    item.textContent = nomes[i];
    lista.appendChild(item);
  }
}

// Função pra sortear um amigo
function sortearAmigo() {
  // Verifica se há nomes para sortear
  if (nomes.length === 0) {
    alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
    return;
  }

  // Gera um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indiceAleatorio];

  // Exibe o resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${nomeSorteado}</strong>!</li>`;
}