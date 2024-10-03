"use client";

import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadProdutos() {
  const navigate = useRouter();
  const [produto, setProduto] = useState<TipoProduto>({
    id: 0,
    nome: "",
    preco: 0,
    estoque: 0,
  });
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try{
      const response = await fetch("https://localhost:3000/api/base-produtos", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(produto),
      });
      if (response.ok){
        setProduto({id:0, nome:"", preco:0, estoque:0})
        alert("Produto cadastrado com sucesso!");
        navigate.push("/produtos");
      }else{
        alert("Erro no cadastrar produto!");
      }
    }
    catch(error){
      console.error("Erro ao cadastrar produto: ", error);
    }
  }

  return (
    <div>
      <h1>Cadastro de Produtos</h1>

      <div>
        <form onSubmit={handleSubmit}>
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
          <button className="border border-black rounded bg-slate-500 text-slate-200 font-semibold px-5 py-2 my-3 hover:bg-red-500 transition-all duration-300" type="submit">Cadastrar</button>
        </form>
        <p>Nome do Produto: {produto.nome}</p>
        <p>Preço do produto: {produto.preco}</p>
        <p>Estoque do produto: {produto.estoque}</p>
      </div>
    </div>
  );
}
