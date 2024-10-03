"use client";

import { TipoProduto } from "@/types";
import { useState } from "react";

export default function CadProdutos() {
  const [produto, setProduto] = useState<TipoProduto>({
    id: 0,
    nome: "",
    preco: 0,
    estoque: 0,
  });

  return (
    <div>
      <h1>Cadastro de Produtos</h1>

      <div>
        <form action="" method="post" onSubmit={}>
          <div>
            <label>Nome do produto:</label>
            <input
              className="border border-black rounded"
              type="text"
              name="nome"
              id="idNome"
              value={produto.nome}
              onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
            />
          </div>
          <div>
            <label>Preço do produto:</label>
            <input
              className="border border-black rounded"
              type="text"
              name="preco"
              id="idpreco"
              value={produto.preco}
              onChange={(e) =>
                setProduto({ ...produto, preco: parseFloat(e.target.value) })
              }
            />
          </div>
          <div>
            <label>Estoque do produto:</label>
            <input
              className="border border-black rounded"
              type="text"
              name="estoque"
              id="idestoque"
              value={produto.estoque}
              onChange={(e) =>
                setProduto({ ...produto, estoque: parseInt(e.target.value) })
              }
            />
          </div>
          <button onSubmit={}></button>
        </form>
        <p>Nome do Produto: {produto.nome}</p>
        <p>Preço do produto: {produto.preco}</p>
        <p>Estoque do produto: {produto.estoque}</p>
      </div>
    </div>
  );
}
