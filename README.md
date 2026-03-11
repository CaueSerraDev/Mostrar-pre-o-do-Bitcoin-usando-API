# 💰 Bitcoin Price Viewer (API Project)

Projeto simples em **HTML + JavaScript** que utiliza uma **API pública** para buscar e mostrar o preço atual do **Bitcoin em reais (BRL)**.

Este projeto foi criado com objetivo de **estudo e prática de consumo de APIs**, manipulação de **JSON** e uso do **JavaScript no navegador**.

---

## 🚀 Funcionalidades

* Buscar o preço atual do Bitcoin
* Consumir dados de uma API externa
* Converter resposta em JSON
* Exibir o resultado na tela
* Interação simples com botão

---

## 🧠 Tecnologias utilizadas

* HTML5
* JavaScript
* API pública de criptomoedas

---

## 📂 Estrutura do projeto

```
projeto-bitcoin-api
│
├── index.html
├── script.js
└── README.md
```

---

## 📄 Como funciona

1. O usuário clica no botão **"Ver preço"**
2. O JavaScript faz uma requisição para uma **API de criptomoedas**
3. A API retorna os dados em formato **JSON**
4. O JavaScript extrai o preço do Bitcoin
5. O valor é exibido na página

---

## 🔗 API utilizada

A aplicação utiliza a API pública da CoinGecko para obter o preço do Bitcoin.

Endpoint utilizado:

```
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl
```

Exemplo de resposta da API:

```json
{
  "bitcoin": {
    "brl": 350000
  }
}
```

---

## ▶️ Como executar o projeto

1. Baixe ou clone o repositório

```
git clone https://github.com/seuusuario/projeto-bitcoin-api.git
```

2. Abra o arquivo:

```
index.html
```

3. Clique no botão **"Ver preço"**

O preço atual do Bitcoin será exibido na tela.

---

## 📚 Objetivo do projeto

Este projeto foi desenvolvido para praticar:

* requisições HTTP
* consumo de APIs
* manipulação de JSON
* JavaScript no front-end

---

## 🔮 Melhorias futuras

* Mostrar preço de outras criptomoedas
* Atualização automática de preço
* Adicionar CSS para melhorar o visual
* Criar um pequeno dashboard de criptomoedas
* Exibir variação de preço 24h

---

## 👨‍💻 Autor

Projeto desenvolvido por **Cauê Serra** para estudo de programação e desenvolvimento web.
