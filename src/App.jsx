import Header from "./components/header"
import Hero from "./components/hero";
import Produto from "./components/produto";
import Categorias from "./components/categorias";
import Depoimentos from "./components/depoimentos"
import Contatos from "./components/contatos"

import listaDeCategorias from "../public/data/listaDeCategorias.json";
import "./style.css"
import { useEffect, useState } from "react";

function App() {
  const [select, setSelect] = useState();
  const [depoimentos, setDepoimentos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [produtos, setProdutos] = useState()

  useEffect(() => {
    const fetchDepoimentos = async () => {
      try {
        const resposta = await fetch("/data/listaDeDepoimentos.json");
        const dados = await resposta.json();
        setDepoimentos(dados);
      } catch (erro) {
        console.error("Erro ao carregar depoimentos...", erro)
      }
    }
    const fetchProdutos = async () => {
      try {
        const resposta = await fetch("/data/listaDeProdutos.json");
        const dados = await resposta.json(); fetchProdutos()
        setProdutos(dados);

        setTimeout(() => {
          setCarregando(false);
        }, 5000);
      } catch (error) {
        console.error("Erro ao carregar produtos...", error)
      }
    }

    fetchDepoimentos();
    fetchProdutos();
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <h2>Produtos disponiveis em nossas lojas</h2>
      <div className="grid justify-center grid-cols-2 justify-items-center md:grid-cols-4 my-5">
        {
          listaDeCategorias.categoria.map((nome, index) => <Categorias categoria={nome} key={index} selecao={() => setSelect(nome)} />)
        }
      </div>
      <span className="block text-gray-500 text-center my-3">clique em alguma categoria para ver os produtos</span>
      <div className="grid justify-center grid-cols-1 justify-items-center my-5 md:grid-cols-3">
        {
          carregando ? (
            <p className="text-center font-bold text-[#FF7209]">Carregando produtos do Pet&Style...</p>
          ) :
            produtos
              .filter((produto) => !select || produto.categoria === select)
              .map((produto, index) => (
                <Produto
                  key={index}
                  nome={produto.nome}
                  categoria={produto.categoria}
                  preco={produto.preco.toFixed(2).replace('.', ',')}
                  descricao={produto.descricao}
                />
              ))
        }
      </div>
      <div className="bg-orange-100 pt-2 pb-10">
        <h2>Depoimentos</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 px-5">
          {
            depoimentos.map((depoimento, index) => (
              <Depoimentos
                nome={depoimento.nome}
                pet={depoimento.pet}
                comentario={depoimento.comentario}
                estrelas={depoimento.estrelas}
                key={index}
              />
            ))
          }
        </div>
      </div>
      <Contatos />
    </>
  )
}

export default App
