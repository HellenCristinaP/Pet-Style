function contatos() {
    const infoContato = {
        telefone: "(13) 12345-1234",
        email: "contato@petandstyle.com.br",
        endereco: "Av. das Palmeiras, 1050, Bertioga - SP",
    };
    return (
        <footer className="flex flex-col items-center py-5 pb-30 border-t border-orange-200" id="contatos">
            <p className="font-bold">{infoContato.endereco}</p>
            <a href={`tel:${infoContato.telefone}`}>{infoContato.telefone}</a>
            <a href={`mailto:${infoContato.email}`}>{infoContato.email}</a>
        </footer>
    )
}

export default contatos;