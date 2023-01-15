<h1 align="center"> Endpoints - todos método GET </h1>

 # /
Este endpoint retorna um array JSON de todos os itens. Os dados são obtidos chamando a função data.main() e são retornados como estão.

# /highCost
Este endpoint retorna o último item do array obtido pela função data.main(). Esse item é considerado o de maior custo.

# /lowCost
Este endpoint retorna o primeiro item do array obtido pela função data.main(). Esse item é considerado o de menor custo.


# Exemplo de retorno: 
```javascript
{
    "description": "item 1",
    "price": "100"
}
```
