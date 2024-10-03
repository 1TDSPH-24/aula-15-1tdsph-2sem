"use client"

import { TipoProduto } from "@/types"
import { useState } from "react"

export default function CadProdutos() {

  //Armazenando o valor de estado dos inputs.
  const [produto, setProduto] = useState<TipoProduto>({
    id:0,
    nome: "",
    preco: 0,
    estoque: 0,
  });

  return (
    <div>
        <h1>Cadastro de Produtos</h1>

          <div>
            <form>
                <div>
                  <label htmlFor="idNome">Nome do Produto:</label>
                  <input type="text" name="nome" id="idNome" value={produto.nome} onChange={(e)=> setProduto({...produto,nome:e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="idPreco">Preço do Produto:</label>
                  <input type="number" name="preco" id="idPreco" value={produto.preco} onChange={(e)=> setProduto({...produto,preco: parseFloat(e.target.value) })}/>
                </div>
                <div>
                  <label htmlFor="idEstoque">Estoque do Produto:</label>
                  <input type="number" name="estoque" id="idEstoque" value={produto.estoque} onChange={(e)=> setProduto({...produto,estoque: parseInt(e.target.value) })}/>
                </div>
            </form>
          </div>
 
    </div>
  )
}
