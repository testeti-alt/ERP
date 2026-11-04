// simula o uso do sistema
const Produto = require("./produto");
const Pedido = require("./pedido");

// Mostra o resumo de um pedido no console
function imprimirResumo(pedido) {
  console.log("-----------------------------");
  console.log("Pedido: " + pedido.numero);
  console.log("Cliente: " + pedido.nomeCliente);
  console.log("Status: " + pedido.status);
  for (const p of pedido.produtos) {
    console.log("  " + p.codigo + " - " + p.descricao + ": R$ " + p.precoUnitario.toFixed(2));
  }
  console.log("Total: R$ " + pedido.calcularTotal().toFixed(2));
}

// Pedido 1
const pedido1 = new Pedido(1001, "Transportadora Alfa");
pedido1.adicionarProduto(new Produto("P001", "Teclado", 250.9));
pedido1.adicionarProduto(new Produto("P002", "Mouse", 89.99));
pedido1.adicionarProduto(new Produto("P003", "Monitor", 899.0));

// Pedido 2
const pedido2 = new Pedido(1002, "Microblau");
pedido2.adicionarProduto(new Produto("P004", "Headset Gamer", 349.90));
pedido2.adicionarProduto(new Produto("P005", "Webcam", 229.50));
pedido2.adicionarProduto(new Produto("P006", "Cadeira Ergonômica", 1150.00));
pedido2.adicionarProduto(new Produto("P007", "Mousepad Extra Grande", 79.90));
pedido2.adicionarProduto(new Produto("P008", "Suporte Articulado para Monitor", 185.00));

// Fecha o primeiro pedido
pedido1.fecharPedido();

// Mostra os dois pedidos
imprimirResumo(pedido1);
imprimirResumo(pedido2);
