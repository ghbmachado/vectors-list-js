function somaVetor(){
  let precos = []
  let soma = 0
  for(let i=0;i<10;i++){
      precos[i] = Number(prompt(`Informe ${i+1}o. preço`))
  }
  for(let i=0;i<10;i++){
      soma = soma + precos[i]
  }
  alert(`A média dos preços é ${soma/10}`)
}
// exercício 1 -> peça ao usuário para informar 10 números
// calcule e mostra a soma dos elementos pares
function exemplo1(){
  let vetor = []
  let soma =0
  for(let i=0;i<10;i++){
      vetor[i] = Number(prompt(`${i+1}o. preço`))
  }
  for(let i=0;i<10;i++){
      if (vetor[i] % 2 == 0){
          soma = soma + vetor[i]
      }
  }
  alert(`A soma é ${soma}`)
}
// exercício 2 -> peça ao usuário para informar 10 números
// calcule e mostra a soma dos elementos nas posições ímpares
function exemplo2(){
  let vetor = []
  let soma = 0
  for(let i=0;i<10;i++){
      vetor[i] = Number(prompt(`${i+1}o. preço`))
  }
  for(let i=0;i<10;i++){
      if (i % 2 == 1){
          soma = soma + vetor[i]
      }
  }
  alert(`Soma ${soma}`)
}

function exe1() {
  let vetor = []

  // Entrada de dados
  for (let i = 0; i < 6; i++) {
    vetor[i] = Number(prompt(`Informe o ${i+1}º elemento:`))
  }

  // Cria os vetores pares e ímpares
  let pares = []
  let impares = []

  for (let i = 0; i < 6; i++) {
    if (vetor[i] % 2 === 0) {
      pares.push(vetor[i])
    } else {
      impares.push(vetor[i])
    }
  }

  // Exibir informações ao usuário
  alert(`Números pares: ${pares}\nQuantidade: ${pares.length}`)
  alert(`Números ímpares: ${impares}\nQuantidade: ${impares.length}`)
}


function exe2() {
  let vetor = []

  // Entrada de dados
  for (let i = 0; i < 7; i++) {
    vetor[i] = Number(prompt(`Informe o ${i+1}º elemento:`))
  }

  // Cria os vetores de múltiplos
  let mult2 = []
  let mult3 = []
  let mult2e3 = []

  for (let i = 0; i < 7; i++) {
    if (vetor[i] % 2 === 0 && vetor[i] % 3 === 0) {
      mult2e3.push(vetor[i])
      mult2.push(vetor[i])
      mult3.push(vetor[i])
    } else if (vetor[i] % 2 === 0) {
      mult2.push(vetor[i])
    } else if (vetor[i] % 3 === 0) {
      mult3.push(vetor[i])
    }
  }

  // Exibir informações ao usuário
  alert(`Números múltiplos de 2: ${mult2}`)
  alert(`Números múltiplos de 3: ${mult3}`)
  alert(`Números múltiplos de 2 e 3: ${mult2e3}`)
}

function exe3() {
  let codigos = []
  let estoque = []

  // Entrada de dados dos produtos
  for (let i = 0; i < 5; i++) {
    codigos[i] = Number(prompt(`Informe o código do produto ${i+1}:`))
    estoque[i] = Number(prompt(`Informe a quantidade em estoque do produto ${i+1}:`))
  }

  let cliente = Number(prompt('Informe o código do cliente (Digite 0 para encerrar):'))

  while (cliente !== 0) {
    let codigo = Number(prompt('Informe o código do produto para compra:'))
    let qtde = Number(prompt('Informe a quantidade para compra:'))

    let achou = false // Não encontrou o produto

    for (let i = 0; i < 5; i++) {
      if (codigo === codigos[i]) {
        achou = true // Achou o produto

        if (estoque[i] >= qtde) { // Tem em estoque
          estoque[i] -= qtde
          alert('Compra realizada com sucesso')
        } else {
          alert('Compra não realizada, falta do produto')
        }
      }
    }

    if (!achou) { // Não encontrou o produto
      alert('Produto não encontrado')
    }

    cliente = Number(prompt('Informe outro código do cliente (Digite 0 para encerrar):'))
  }

  // Exibir informações ao usuário
  alert(`Estoque atualizado: ${estoque}`)
}

function exe31(){
  let codigos = []
  let estoque = []
  for(let i = 0;i < 5; i++){
      codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
      estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
  }
  let cliente = Number(prompt('Informe código do cliente'))
  while (cliente != 0 ) {
      let codigo = Number(prompt(`Informe o código do produto para compra`))
      let qtde = Number(prompt(`Informe qtde para compra`))
      // vamos procurar o código do produto
      let achou = false // não encontrei o produto
      if (codigos.includes(codigo)){
              achou = true // achou
              // recupera posição do código do produto
              let posicao = codigos.indexOf(codigo)
              if (estoque[posicao] >= qtde){ // tem em estoque
                  estoque[posicao] = estoque[posicao] - qtde
                  alert('Compra realizada com sucesso')
              }
              else {
                  alert('Compra não realizada, falta do produto')
              }
      }
      // encerrou a procura
      if (!achou) { // não encontrou
          alert('Produto não encontrado')
      }
      cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
  }
  console.log(`Estoque atualizado ${estoque}`)
}

function exe4(){
  // entrada de dados
  let vet = []
  for(let i=0;i<10;i++){
      vet[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
  }
  // cria um vetor que guarda as posições do número 30
  let posicoes = []
  for(let i=0;i<10;i++){
      if (vet[i] == 30) {
          posicoes.push(i)
      }
  }
  alert(`Posições aonde o 30 aparecem ${posicoes}`)
}

function exe5(){
  let logica = []
  let linguagem = []
  let comum = []
  for(let i=0;i<10;i++){
      logica[i] = Number(prompt(`Informe o ${i}o. aluno que faz Lógica`))
  }
  for(let i=0;i<5;i++){
      linguagem[i] = Number(prompt(`Informe o ${i}o. aluno que faz Linguagem`))
  }
  // vamos verificar a intersecção
  for(let i=0;i<10;i++){
      if (linguagem.includes(logica[i])){
          comum.push(logica[i])
      }
  }
  alert(`Alunos que fazem as duas disciplinas ${comum}`)
}

function exe6() {
  let vendas = []
  let percentuais = []
  let nomes = []
  let comissoes = []

  for(let i = 0; i < 5; i++) {
    vendas[i] = Number(prompt(`Informe a venda do ${i+1}º vendedor:`))
    percentuais[i] = Number(prompt(`Informe o percentual do ${i+1}º vendedor:`))
    nomes[i] = prompt(`Informe o nome do ${i+1}º vendedor:`)

    // Calcula comissão do vendedor
    comissoes[i] = (vendas[i] / percentuais[i]) * 100
  }

  let total = 0
  let maior = comissoes[0]
  let menor = comissoes[0]

  for(let i = 0; i < 5; i++) {
    total += vendas[i]

    if (comissoes[i] > maior) {
      maior = comissoes[i]
    }

    if (comissoes[i] < menor) {
      menor = comissoes[i]
    }
  }

  // Exibir informações ao usuário
  alert(`Valor total vendido: ${total}`)
  alert(`Maior valor: ${maior} e quem recebe: ${nomes[comissoes.indexOf(maior)]}`)
  alert(`Menor valor: ${menor} e quem recebe: ${nomes[comissoes.indexOf(menor)]}`)
}


function codigoAlunoRepetido(){
  let codigos = []
  let nomes = []
  for(let i=0;i<5;i++){
      let codigo = Number(prompt('Informe um código de aluno'))
      // codigos tem todos os códigos
      // código tem o código digitado pelo usuário
      // includes verifica se código está dentro de códigos
      while (codigos.includes(codigo)) {
          codigo = Number(prompt('Código já existe, informe um novo'))
      }
      // como o código é novo, agora podemos inserir no vetor
      codigos[i] = codigo
      nomes[i] = prompt('Informe um nome de alulno')
  }
  console.log(codigos)
  alert(codigos)
  console.log(nomes)
  alert(nomes)
}

function exe7(){
  // Preenchendo o vetor com dez números reais
var vetor = [];
for (var i = 0; i < 10; i++) {
  var numero = parseFloat(prompt("Digite um número real:"));
  vetor.push(numero);
}

// Calculando a quantidade de números negativos e a soma dos números positivos
var quantidadeNegativos = 0;
var somaPositivos = 0;

for (var i = 0; i < vetor.length; i++) {
  if (vetor[i] < 0) {
    quantidadeNegativos++;
  } else if (vetor[i] > 0) {
    somaPositivos += vetor[i];
  }
}

// Exibindo os resultados para o usuário
alert("Quantidade de números negativos: " + quantidadeNegativos);
alert("Soma dos números positivos: " + somaPositivos);

}

function exe8(){
  // Vetor com os nomes dos alunos
var nomes = ["João", "Maria", "Pedro", "Ana", "José", "Mariana", "Carlos"];

// Vetor com as notas dos alunos
var notas = [
  [7.5, 8.0, 6.5], // Notas do João
  [6.0, 7.5, 5.0], // Notas da Maria
  [8.5, 7.0, 7.5], // Notas do Pedro
  [7.0, 6.5, 6.0], // Notas da Ana
  [6.5, 6.0, 5.5], // Notas do José
  [8.0, 7.5, 7.0], // Notas da Mariana
  [7.5, 6.0, 6.5]  // Notas do Carlos
];

// Vetor com as médias finais dos alunos
var mediasFinais = [];

// Calcular as médias finais dos alunos
for (var i = 0; i < notas.length; i++) {
  var soma = 0;
  for (var j = 0; j < notas[i].length; j++) {
    soma += notas[i][j];
  }
  var media = soma / notas[i].length;
  mediasFinais.push(media);
}

// Encontrar o aluno com a maior média
var maiorMedia = -1;
var alunoMaiorMedia = "";

for (var i = 0; i < mediasFinais.length; i++) {
  if (mediasFinais[i] > maiorMedia) {
    maiorMedia = mediasFinais[i];
    alunoMaiorMedia = nomes[i];
  }
}

// Mostrar o aluno com a maior média
alert("Aluno com a maior média: " + alunoMaiorMedia);

// Calcular e mostrar o quanto cada aluno precisa tirar no exame final para ser aprovado
var mediaAprovacaoExame = 5;
var resultados = "";

for (var i = 0; i < mediasFinais.length; i++) {
  if (mediasFinais[i] < 7) {
    var notaExame = (mediaAprovacaoExame * 2) - mediasFinais[i];
    resultados += nomes[i] +
      " precisa tirar " +
      notaExame.toFixed(2) +
      " no exame final para ser aprovado.\n";
  }
}

// Mostrar os resultados para o usuário
if (resultados !== "") {
  alert("Resultados:\n\n" + resultados);
} else {
  alert("Todos os alunos foram aprovados!");
}
}

function exe9(){
  // Preenchendo os vetores com os dados dos produtos
var nomes = [];
var codigos = [];
var precos = [];

for (var i = 0; i < 10; i++) {
  nomes.push(prompt("Digite o nome do produto " + (i + 1) + ":"));
  codigos.push(parseInt(prompt("Digite o código do produto " + (i + 1) + ":")));
  precos.push(parseFloat(prompt("Digite o preço do produto " + (i + 1) + ":")));
}

// Construindo o relatório dos produtos que sofrerão aumento
var relatorio = "Relatório de Produtos com Aumento de Preço\n\n";

for (var i = 0; i < 10; i++) {
  var nome = nomes[i];
  var codigo = codigos[i];
  var preco = precos[i];
  var novoPreco = preco;

  if (codigo % 2 === 0 || preco > 1000) {
    if (codigo % 2 === 0 && preco > 1000) {
      novoPreco += novoPreco * 0.2; // Aumento de 20%
    } else if (codigo % 2 === 0) {
      novoPreco += novoPreco * 0.15; // Aumento de 15%
    } else {
      novoPreco += novoPreco * 0.1; // Aumento de 10%
    }

    relatorio += "Nome: " + nome + "\n";
    relatorio += "Código: " + codigo + "\n";
    relatorio += "Preço: R$ " + preco.toFixed(2) + "\n";
    relatorio += "Novo Preço: R$ " + novoPreco.toFixed(2) + "\n";
    relatorio += "----------------------------------\n";
  }
}

// Exibindo o relatório para o usuário
alert(relatorio);

}