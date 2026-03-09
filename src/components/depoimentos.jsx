function Depoimentos({ nome, pet, comentario, estrelas }) {
    const exibicaoEstrelas = Array.from({ length: estrelas });

    return (
        <article className="bg-[#f5f5f5] p-5 rounded-2xl shadow-xl border border-[#00000062]" id="depoimentos">
            <p className="font-bold">{nome} <span className="inline font-medium">- Tutor(a) do(a) {pet}</span>
            </p>
            <div className="gap-5 flex">
                {exibicaoEstrelas.map((_, index) => (
                    <span key={index} className="text-yellow-500 text-2xl">٭</span>
                ))}
            </div>
            <p class="text-[#494d53] leading-relaxed">"{comentario}</p> 
        </article>
    )
}

export default Depoimentos;