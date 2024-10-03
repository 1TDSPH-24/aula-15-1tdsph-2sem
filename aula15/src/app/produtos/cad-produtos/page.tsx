"use client"

import { TipoProduto } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CadProdutos() {

  const navigate = useRouter();

  //Armazenando o valor de estado dos inputs.
  const [produto, setProduto] = useState<TipoProduto>({
    id:0,
    nome: "",
    preco: 0,
    estoque: 0,
  })

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {
    
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/base-produtos", {
        method:"POST",
        headers:{"Content-type":"application/json",}, 
        body: JSON.stringify(produto),
      })

      if(response.ok){
        setProduto({id: 0, nome:"",preco:0, estoque:0 });
        alert("Produto cadastrado com sucesso!")
        // Redirecionando o usuário para a página de produtos.
        navigate.push("/produtos");
      }else{
        alert("Erro ao cadastrar Produto!")
      }
    } catch (error) {
      console.log("Erro ao cadastrar produto: ", error);
    }

  }

  return (
    <div>
        <h1>Cadastro de Produtos</h1>

          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="idNome">Nome do produto</label>
                <input type="text" name="nome"  id="idNome" value={produto.nome} onChange={(e)=> setProduto({...produto,nome:e.target.value})} />
              </div>
              <div>
                <label htmlFor="idPreco">Preço do produto</label>
                <input type="number" name="preco"  id="idPreco" value={produto.preco} onChange={(e)=> setProduto({...produto,preco: parseFloat(e.target.value)})} />
              </div>
              <div>
                <label htmlFor="idEstoque">Estoque do produto</label>
                <input type="number" name="estoque"  id="idEstoque" value={produto.estoque} onChange={(e)=> setProduto({...produto,estoque: parseInt(e.target.value)})} />
              </div>
              <div>
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
    </div>
  )
}