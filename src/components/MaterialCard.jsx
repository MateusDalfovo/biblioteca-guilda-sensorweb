function MaterialCard({ titulo, icone, descricao, tags, link }) {
  return (
    <div className="card">

      <h3>
        {icone} {titulo}
      </h3>

      <p>
        {descricao}
      </p>

      <div className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar ↗
      </a>

    </div>
  )
}

export default MaterialCard