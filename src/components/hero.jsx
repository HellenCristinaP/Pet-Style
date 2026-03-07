function Home() {
    return (
        <section className="grid grid-cols-1 gap-5 px-5 py-10 md:grid-cols-2 bg-orange-100 md:py-20">
            <picture>
                <source media="(min-width: 800px)" srcset="LogoG.png" />
                <img src="Logo.png" alt="logo do PetSgop - um gato e um cachorro lado a lado" className="m-auto" />
            </picture>
            <div className="flex flex-col justify-center text-center md:text-start">
                <h1 className="text-2xl mb-2 text-[#c05300]">Seja bem-vindo ao PetShop Pet&Style</h1>
                <p className="text-[#c05300] font-medium">Onde seu pet sai estiloso!</p>
            </div>
        </section>
    )
}

export default Home;