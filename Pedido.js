// Classe Pedido: guarda os dados de um pedido de venda
class Pedido {
  constructor(numero, nomeCliente) {
    this.numero = numero;
    this.nomeCliente = nomeCliente;
    this.status = "Aberto"; // todo pedido começa aberto
    this.produtos = [];     // lista de produtos começa vazia
  }

  // Adiciona um produto na lista
  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  // Soma o preço de todos os produtos
  calcularTotal() {
    let total = 0;
    for (const produto of this.produtos) {
      total = total + produto.precoUnitario;
    }
    return total;
  }

  // Muda o status para Fechado
  fecharPedido() {
    this.status = "Fechado";
  }
}

module.exports = Pedido;
