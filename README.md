
## Query SQL
```sql
SELECT DISTINCT c.Razao_Social
FROM Clientes c
INNER JOIN Notas_Fiscais nf ON nf.ID_Cliente = c.ID_Cliente
WHERE c.Estado = 'SP'
  AND nf.Status = 'Cancelada'
  AND nf.Data_Emissao = MONTH(GETDATE())
  AND nf.Data_Emissao = YEAR(GETDATE())
```

## Resposta Maria

Boa tarde Maria! Tudo bem?

Fique tranquila, vamos resolver esse problema para você com prioridade máxima!

O que pode ter ocorrido com o sistema foi que uma parte do código esperava receber um tipo de informação específica, como um número ou texto por exemplo, mas recebeu outro que era incompatível.

Feche e abra o sistema, verifique se as informações inseridas estão corretas antes de emitir e faça a emissão novamente da nota fiscal.

Caso o erro persista após isso, me envie um print, horário, usuário e número do pedido.

Também vou verificar o que acontece nas sextas-feiras e fazer a correção. Obrigado pela paciência!

Henrique - TI



Plano de investigação
- Ver se o problema é só com a Maria ou com todos os usuários.
- Pedir print, horário, usuário e número do pedido.
- Olhar os logs no horário do erro.
- Abrir o código na linha 45 e ver qual dado está com o tipo errado.
- Levantar causas: campo vazio, texto em campo numérico, data inválida.
- Reproduzir o erro em ambiente de teste com os mesmos dados.
- Investigar por que acontece na sexta.
- Corrigir o código e validar o dado antes de usar.
- Testar o caso original, publicar e pedir confirmação da Maria.
- Documentar a causa e a solução.
