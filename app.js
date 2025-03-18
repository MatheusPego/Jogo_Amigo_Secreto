//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Função para adicionar o amigo à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim(); // Remove espaços em branco do início e fim

    // Verificando se o nome está vazio ou não
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;  // Se estiver vazio, não continua
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista exibida na interface
    atualizarLista();

    // Limpa o campo de entrada
    nomeInput.value = "";
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista existente
    listaAmigos.innerHTML = "";

    // Adiciona um <li> para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verificando se há amigos na lista
    if (amigos.length === 0) {
        alert("Por favor, adicione amigos à lista primeiro.");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome de quem foi sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome de quem foi sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
