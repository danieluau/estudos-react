function Pessoa ({nome, idade, profissao, foto}) {
    return (
    <div>
        <img src={foto} alt={nome} />
        <h2>nome: {nome}</h2>
        <h2>idade: {idade}</h2>
        <p>foto: {foto}</p>

    </div>
    )
}

export default Pessoa;