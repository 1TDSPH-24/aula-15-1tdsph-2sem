"use client"

import { TipoProduto } from "@/types"
import { useState } from "react"


export default function CadProdutos() {

  const [produto, setProduto] = useState<TipoProduto>({
    id: 0,
    nome: "",
    preco : 0,
    estoque : 0    
  })

  return (
    <div>
        <h1>Cadastro de Produtos</h1>

        <div>
          <form action="" method="post">
            
          </form>
        </div>


    </div>
  )
}
