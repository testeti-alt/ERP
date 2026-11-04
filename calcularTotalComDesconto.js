// Soma os preços e aplica o desconto no total
function calcularTotalComDesconto(precosItens, porcentagemDesconto) {
  let total = 0;

  //"<" e não "<=" 
  for (let i = 0; i < precosItens.length; i++) {
    total = total + precosItens[i];
  }

  // porcentagem se divide por 100
  const desconto = total * (porcentagemDesconto / 100);

  return total - desconto;
}


console.log(calcularTotalComDesconto([100, 200, 300], 10));

module.exports = calcularTotalComDesconto;
