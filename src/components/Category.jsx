import { useState } from 'react'
import MaterialCard from './MaterialCard'

function Category({ nome, icone, materiais }) {

  const [aberta, setAberta] = useState(false)

  return (
    <section className="category">

      <button
        className="category-header"
        onClick={() => setAberta(!aberta)}
      >
        {aberta ? '▼' : '▶'} {icone} {nome} ({materiais.length})
      </button>

      {aberta && (
        <div className="category-content">

          {materiais.map((material) => (
            <MaterialCard
              key={material.id}
              titulo={material.titulo}
              icone={material.icone}
              descricao={material.descricao}
              tags={material.tags}
              link={material.link}
            />
          ))}

        </div>
      )}

    </section>
  )
}

export default Category