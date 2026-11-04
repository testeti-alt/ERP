
## SQL
```sql
SELECT DISTINCT c.Razao_Social
FROM Clientes c
INNER JOIN Notas_Fiscais nf ON nf.ID_Cliente = c.ID_Cliente
WHERE c.Estado = 'SP'
  AND nf.Status = 'Cancelada'
  AND nf.Data_Emissao >= DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1)
  AND nf.Data_Emissao <  DATEADD(MONTH, 1, DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1));
```