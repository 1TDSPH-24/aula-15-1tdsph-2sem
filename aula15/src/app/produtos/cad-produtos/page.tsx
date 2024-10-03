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
  })

  return (
    <div>
        <h1>Cadastro de Produtos</h1>

          <div>
            <form method="GET">

            </form>
          </div>

    </div>
  )
}
