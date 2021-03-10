# cubos-academy-psel-isa
Respositório do Desafio de entrada na Cubos


Cada um dos arquivos aqui presentes representam a solução criada por mim de uma questão proposta no desafio de entrada no curso Programação do Zero da Cubos Academy. As questões, cujo nomes correspondem aos nomes dos arquivos são as seguintes:

(01) Divisível por X

O objetivo desse exercicio é retornar se o número de entrada é divisível por x ou não.

Seu programa receberá sempre de entrada: um número inteiro e outro número inteiro representando x e deverá imprimir na tela se o primeiro número de entrada é divisível por x.

Input Format

A entrada será sempre dois números inteiros.

Output Format

A saída deverá ser sempre true ou false.

Sample Input 0

10 2

(02) Jackpot

O objetivo desse exercício é retornar se a pessoa que jogou no caça-níqueis ganhou o jackpot ou não.

Uma pessoa ganha no caça-níqueis quando os três resultados são iguais.

Você receberá na entrada tres strings representando cada um dos resultados. Caso a pessoa tenha ganhado, imprima true, caso contrátio, imprima false.

Input Format

A entrada será sempre composta por três strings, cada uma representando um resultado, através de um caractere.

Output Format

A saída deverá ser true caso a pessoa tenha ganho o jackpot e false caso contrário.

Sample Input 0

A A C

(03) Derrapagem

O Tesla Model X é um carro autônomo que consegue dirigir sozinho. Para evitar acidentes, o carro deve ser capaz de calcular qual a distância que ele percorrerá, ao iniciar o processo de frenagem, até parar.

Você acabou de ser contratado(a) como desenvolver(a) de software na Tesla. Sua primeira tarefa é fazer um programa capaz de calcular essa distância. A fórmula para o cálculo é a seguinte:

distância = velocidade²/2*aceleração

Seu programa sempre receberá como entrada a a velocidade e a aceleração e deverá imprimir na tela a distância percorrida pelo carro até parar.

Input Format

A entrada será sempre composta por dois números inteiros: a velocidade e a aceleração.

Output Format

A saída deverá ser sempre um número representando a distância percorrida pelo carro ao longo da frenagem.

Sample Input 0

{
  "velocidade": 20,
  "aceleracao": -2
}

(04) Colisão

Com o sucesso da sua ultima tarefa na Tesla, lhe foi passada uma melhoria.

A melhoria consiste em mostrar no visor do carro se ele irá colidir com um objeto em sua frente, usando a fórmula da sua tarefa anterior e a distância do objeto.

Seu programa sempre receberá como entrada a velocidade, aceleração e a distância do objeto e deverá imprimir na tela se o carro irá colidir ou não.

Input Format

A entrada será sempre três números inteiros: a velocidade, a aceleração e a distância.

Output Format

"COLISAO A FRENTE" quando a distância até o objeto for menor do que a distância de derrapagem do carro
"NAO ACELERE" quando as distâncias forem iguais
"CAMINHO SEGURO" quando a distância até o objeto for maior do que a distância de derrapagem do carro
ATENTE-SE À CAPITALIZAÇÃO DA RESPOSTA, TUDO DEVERÁ ESTAR EM MAIÚSCULAS
Sample Input 0

{
  "velocidade": 20,
  "aceleracao": -2,
  "distanciaObjeto": 500
}


(05) Enésimo Número Par

O enésimo termo é uma fórmula com 'n' que permite encontrar qualquer termo de uma sequência sem ter que ir um por um.

'n' representa a posição do termo, portanto, para encontrar o 50º termo, substituiríamos 50 na fórmula no lugar de 'n'.

Exemplo da sequência:

1º          2º          3º          nº
2 * 1 = 2   2 * 2 = 4   2 * 3 = 6   2 * n = 2n

Seu programa receberá sempre como entrada um número inteiro representando n e deverá imprimir na tela um número inteiro representando o enésimo número par.

Input Format

A entrada será sempre um número inteiro representando n.

Output Format

A saída deverá ser sempre o enésimo (n) número par.

(06) Black Friday

Toda black friday sua família combina de trocar presentes entre si. Qualquer familiar pode entrar na brincadeira, basta comprar um presente que atenda os requistos de preço e avaliação estipulados. Cada amigo secreto estipula um preço máximo e uma nota de avaliação mínima para seu presente. Cabe, a quem for presentear, atender a estes requisitos.

Para agilizar o processo desse ano, você conseguiu acesso a uma lista de produtos e decidiu criar um programa para filtrá-los por avaliação e preço.

Seu programa receberá sempre como entrada:

a lista de produtos contendo o preço e a avaliação de cada um
um número inteiro representando o valor máximo que o presente deve ter
um número inteiro representando a avaliação mínima que o presente deve ter
Seu programa deve imprimir na tela um array contendo apenas os produtos que podem ser dados como presente nesta situação.

Input Format

A entrada será sempre composta por três variáveis:

a lista de produtos contendo o preço e a avaliação de cada um
um número inteiro representando o valor máximo que o presente deve ter
um número inteiro representando a avaliação mínima que o presente deve ter
Output Format

A saída deverá ser sempre um array de produtos que atendem ao filtro, ou seja, que tenham preço menor ou igual ao preço máximo e avaliação igual ou superior a avaliação mínima.


(07) Purificação

Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

Dado corrompido             Dado purificado
*Canis %lupus )familiaris   Canis lupus familiaris
Felis) silvestris *catus&   Felis silvestris catus
$Ailuropoda@ melanoleuca!   Ailuropoda melanoleuca

Input Format

A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&*().

Output Format

A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&*().

Sample Input 0

*Canis %lupus )familiaris

(08) Empréstimo

m novo banco abriu em seu estado e liberou a fórmula que ele utiliza para calcular o valor da parcela de um tipo de empréstimo.

A fórmula precisa de 3 dados, os ganhos por mês da pessoa, seu score no Serasa e em quantos meses a pessoa pretende pagar.

parcela = 3*ganhos + (ganhos * (juros/100)) / mesesparapagar

Existem 3 faixas de juros que as pessoas se encaixam dependendo de seu score no Serasa:
- 1ª faixa (Score menor que 300), juros = 3%;
- 2ª faixa (Score menor que 700), juros = 9%;
- 3ª faixa (Score maior ou igual a 700), juros = 15%;

Um amigo seu viu isso como uma forma de empreender e decidiu criar um aplicativo que calcula o valor da parcela. Para fazer isso ele pediu a sua ajuda.

Seu programa receberá sempre como entrada os ganhos da pessoa, seu score no Serasa e em quantos meses a pessoa pagará e deverá imprimir na tela o valor da parcela.

Input Format

A entrada será sempre três números inteiros:

os ganhos da pessoa
seu score no Serasa
em quantos meses a pessoa pagará.
Output Format

A saída deverá ser sempre um número representando o valor da parcela.

(09) Forca

Você está desenvolvendo um jogo da forca para a sua empresa. No jogo da forca, o usuário tem que descobrir qual é a palavra que está "escondida" escolhendo letras que ele acredita que está contida nessa palavra.

Seu papel como desenvolvedor(a) é fazer a parte do código que, ao receber a letra palpite do usuário e a palavra escondida, retornará a quantidade de acertos obtidos pelo usuário nesse palpite.

Input Format

A entrada será sempre duas strings: o palpite feito pelo jogador e a palavra a ser descoberta. O palpite será sempre apenas um caractere minúsculo e sem acento. A palavra será sempre composta apenas por caracteres minúsculos e sem acento.

Output Format

A saída sempre será a quantidade de acertos do palpite.

(10) Coincidência

Coincidência é um "jogo" muito utilizado por crianças quando querem formar duas equipes com quantidades iguais de pessoas aleatoriamente.

Para isso um número par de crianças escolhe 0 ou 1 para jogar, todas na mesma hora. Todas as que jogarem 0 são selecionadas para uma equipe e todas que jogaram 1 são selecionadas para outra. Caso ambas as equipes tenham a mesma quantidade de crianças elas podem começar a jogar. Caso contrário, devem fazer um novo sorteio.

Faça um programa que diga, a partir nos valores escolhidos pelas crianças, se elas podem começar a jogar ou se devem fazer um novo sorteio.

Input Format

A entrada será sempre um array cujo tamanho é um número par. Cada item desse array será um número 0 ou 1, representando o que foi escolhido por uma criança nessa rodada.

Output Format

A saída deverá ser true caso o sorteio tenha conseguido dividir as crianças em dois grupos e false caso seja necessário realizar um novo sorteio.


(11) Então é Natal!

Você desenvolve para um aplicativo de entrega de alimentos e recebeu uma tarefa antes de sair de férias para o natal. A tarefa consiste em criar as novas regras natalinas de desconto e calcular o valor total da compra, considerando o frete.

Existem três categorias de alimentos no seu app, SALGADO, DOCE e BEBIDA e a tabela de descontos é a seguinte:

SALGADO DOCE    BEBIDA
10%     15%     30%

Além disso, foram criados quatro cupons para novos usuários (primeira compra):

NATAL10: 10% de desconto para compras acima de R$ 30,00;
NATAL20: 20% de desconto para compras acima de R$ 45,00;
NATAL30: 30% de desconto para compras acima de R$ 60,00;

NATALSUPREMO: 30% de desconto e frete grátis para compras acima de R$ 80,00;
O preço padrão do frete é R$ 1,20 por Km.

A lógica do cáclulo do valor total a pagar é a seguinte:

Primeiro calcula-se o valor a pagar pelos produtos, aplicando o cupom referente as suas categorias.
Depois, caso o usuário tenha inserido algum cupom, valida-se se ele realmente pode usar aquele cupom. Caso possa, o desconto é aplicado sobre o valor calculado até então. Caso não possa, o cupom é simplesmente ignorado.
Calcula-se o frete, caso o usuário não tenha utilizado o cupom que dá frete grátis, e soma-se ao valor a pagar até então.
Imprima na tela, EM CENTAVOS, o valor total a se pagar.
R$ 1,00 = 100 centavos.

Input Format

Seu programa receberá sempre como entrada:

a lista de produtos que contém, para cada item, seu preço unitário, a quantidade comprada e sua categoria (SALGADO, DOCE ou BEBIDA)
a distância, em Km, do restaurante.
o cupom de desconto informado (NATAL10, NATAL20, NATAL30, NATALSUPREMO ou nenhum)
se essa é a primeira compra do usuário e ele deverá imprimir o valor total a ser pago pelo cliente.
Output Format

A saída deverá ser sempre um numero inteiro representando o valor total a ser pago pelo cliente, EM CENTAVOS.

(12) Perda Mínima

Letícia tem um gráfico de preços projetados para uma casa nos próximos anos. Ela deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo. Ela quer minimizar suas perdas financeiras.

Por exemplo, a casa é avaliada em preço = [20, 15, 8, 2, 12] nos próximos 5 anos. Ela pode comprar a casa em qualquer ano, mas deve revendê-la com prejuízo em um dos anos seguintes. Sua perda mínima seria incorrida comprando no 2º ano em preço[1] = 15 e revendendo no 5º ano em preço[4] = 12.

Encontre e imprima a quantidade mínima de dinheiro que Letícia deve perder se comprar a casa e revendê-la nos próximos anos.

Input Format

A entrada será sempre um array de inteiros de tamanho variado contendo o preço da casa nos próximos anos.

Output Format

A saída sempre será um inteiro representando a perca mínima que Letícia terá.

