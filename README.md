# Carteira Digital - README

## Descrição do Projeto

O projeto Carteira Digital é uma aplicação desenvolvida em React que permite aos usuários registrar e gerenciar despesas internacionais em diversas moedas diferentes. A aplicação oferece a funcionalidade de adicionar despesas com informações detalhadas, incluindo valores, descrições, formas de pagamento e tags.

## Funcionalidades Principais

1. **Adição de Despesas Internacionais:** Os usuários podem adicionar despesas incluindo informações como descrição, tag, método de pagamento, valor, moeda utilizada, câmbio utilizado, valor convertido e moeda de conversão.

2. **Layout Intuitivo:** O layout da aplicação é projetado para facilitar a inserção e visualização das despesas. As informações são exibidas em uma tabela organizada com colunas para cada detalhe relevante.

3. **Conversões Automáticas:** A aplicação utiliza chamadas de API para realizar conversões automáticas entre moedas, proporcionando aos usuários o valor convertido em sua moeda local.

4. **Gerenciamento de Estado com Redux:** O estado da aplicação é gerenciado de forma eficiente utilizando Redux, o que permite um controle centralizado e facilita a manipulação dos dados.

## Layout da Tabela

A tabela de despesas segue o seguinte layout:

| Descrição | Tag | Método de Pagamento | Valor | Moeda | Câmbio Utilizado | Valor Convertido | Moeda de Conversão | Editar/Excluir |
|------------|-----|----------------------|-------|-------|-------------------|-------------------|--------------------|----------------|
| Shopping   | Alimentação | Dinheiro | 280.00 | Dólar Americano/Real Brasileiro | 4.92 | 1378.50 | Real | *botões de edição/exclusão* |

## Iniciando o Projeto

Para iniciar o projeto, siga os passos abaixo:

1. **Instale as Dependências:**
   ```bash
   npm install
2. **Inicie a Aplicação:**
   ```bash
   npm start

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para a construção de interfaces de usuário.
- Redux: Biblioteca para gerenciamento de estado na aplicação.
- Chamadas de API: Utilizadas para obter informações de câmbio e realizar conversões automáticas.

## Contribuições

Contribuições são bem-vindas! Se você encontrar problemas, bugs ou tiver sugestões para melhorias, sinta-se à vontade para abrir issues ou enviar pull requests.

Aproveite o uso da Carteira Digital! 🌐💸