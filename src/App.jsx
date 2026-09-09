import './App.css'

import Header from './components/Header'
import Category from './components/Category'
import materiais from './data/materiais'
import FormularioModal from './components/FormularioModal'


import { useState } from 'react'

function App() {

  const [modalAberto, setModalAberto] = useState(false)

  const categorias = [...new Set(
    materiais.map((material) => material.categoria)
  )]

  function salvarMaterial(novoMaterial) {

    console.log('Material recebido pelo App:', novoMaterial)

    // Por enquanto vamos apenas fechar o modal.
    // Depois vamos enviar esse objeto para o backend.

    setModalAberto(false)
  }

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

              <FormularioModal
                onSalvar={salvarMaterial}
                onCancelar={() => setModalAberto(false)}
              />

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