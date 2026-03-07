function categoria({categoria, selecao}) {
    return (
        <article className="flex shadow-[#0000002f] border border-[#0000002f] p-5 w-fit m-5 rounded-2xl shadow-sm transition delay-95 duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg active:translate-0 active:shadow-sm">
            <h3 onClick={selecao}>{categoria}</h3>
        </article>
    )
}

export default categoria;