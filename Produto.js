// Classe Produto: guarda os dados de um produto
class Produto {
  constructor(codigo, descricao, precoUnitario) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
  }
}

module.exports = Produto;
