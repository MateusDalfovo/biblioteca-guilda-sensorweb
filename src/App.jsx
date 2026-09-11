import './App.css'

import Header from './components/Header'
import Category from './components/Category'
//import materiais from './data/materiais'
import FormularioModal from './components/FormularioModal'

import { useState } from 'react'

function App() {

  const [modalAberto, setModalAberto] = useState(false)

  // A biblioteca começa vazia.
  // Os materiais serão adicionados através do FormularioModal.
  const [listaMateriais, setListaMateriais] = useState([])

  // Cria uma lista de setores únicos para organizar os materiais.
  const categorias = [...new Set(
    listaMateriais.map((material) => material.assunto)
  )]

   function salvarMaterial(novoMaterial) {

    console.log('Material recebido pelo App:', novoMaterial)
    setListaMateriais((materiaisAtuais) => [
      ...materiaisAtuais,
      novoMaterial
    ])

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

        <h2>Materiais Disponíveis</h2>

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
            materiais={listaMateriais.filter(
              (material) => material.assunto === categoria
            )}
          />
        ))}

      </main>

    </div>
  )
}

export default App