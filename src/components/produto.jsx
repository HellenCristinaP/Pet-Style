function Produto ({ categoria, nome, preco, descricao}){
    return (
        <article className="py-5 px-8 m-5 rounded-2xl shadow-lg border border-[#0000002f] md:grid-cols-3">
            <p className="font-bold">{nome}</p>
            <p>{categoria}</p>
            <span>{preco}</span>
            <p>{descricao}</p>
        </article>
    )
}

export default Produto;

