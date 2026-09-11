function MaterialCard({ titulo, icone, descricao, nome, setor, link }) {
  return (
    <div className="card">

      <h3>
        {icone} {titulo}
      </h3>

      <p>
        {descricao}
      </p>

      <div className="card-info">
        <span>
          👤 {nome}
        </span>

        <span>
          🏢 {setor}
        </span>


      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar ↗️
      </a>


    </div>
  )
}

export default MaterialCard