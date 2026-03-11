function buscarPreco() {

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl")

.then(resposta => resposta.json())

.then(dados => {

let preco = dados.bitcoin.brl;

document.getElementById("resultado").innerHTML =
"Preço do Bitcoin: R$ " + preco;

});

}