function Depoimentos({ nome, pet, comentario, estrelas }) {
    const exibicaoEstrelas = Array.from({ length: estrelas });

    return (
        <article className="p-5 m-5 rounded-2xl shadow-xl border border-[#00000062]" id="depoimentos">
            <p className="font-bold">{nome} <span className="inline font-medium">- Tutor(a) do(a) {pet}</span>
            </p>
            <div>
                {exibicaoEstrelas.map((_, index) => (
                    <span key={index} className="mx-2 text-yellow-500 text-2xl estrela">٭</span>
                ))}
            </div>
            <p>{comentario}</p>
        </article>
    )
}

export default Depoimentos;