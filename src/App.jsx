import './App.css'

import Header from './components/Header'
import Category from './components/Category'
import materiais from './data/materiais'

import { useState } from 'react'

function App() {

  const [modalAberto, setModalAberto] = useState(false)

  const categorias = [...new Set(
    materiais.map((material) => material.categoria)
  )]

  return (


    <div className="app">

      <Header />

      <button
        className="add-button"
        onClick={() => setModalAberto(true)}
      >
        +
      </button>

      <main className="content">

        <h2>Materiais disponíveis</h2>


        {modalAberto && (
          <div className="modal-overlay">
            <div className="modal">
              <button
                className="modal-close"
                onClick={() => setModalAberto(false)}
              >
                ×
              </button>

              Olá! Sou o modal
            </div>
          </div>
        )}

        {categorias.map((categoria) => (
          <Category
            key={categoria}
            nome={categoria}
            icone="✅"
            materiais={materiais.filter(
              (material) => material.categoria === categoria
            )}
          />
        ))}

      </main>

    </div>
  )
}

export default App