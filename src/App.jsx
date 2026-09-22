import './App.css'

import Header from './components/Header'
import Category from './components/Category'
import FormularioModal from './components/FormularioModal'

import { useEffect, useState } from 'react'

function App() {

  const [modalAberto, setModalAberto] = useState(false)

// A biblioteca começa vazia.
// Os materiais serão adicionados através do FormularioModal.
  const [listaMateriais, setListaMateriais] = useState([])

// Busca os materiais que estão no banco de dados quando a página é reiniciada
  useEffect(() => {
  async function buscarMateriais() {
    try {
      const resposta = await fetch('http://localhost:3000/api/materiais')

      const dados = await resposta.json()

      console.log('Materiais carregados:', dados)

      setListaMateriais(dados)

    } catch (erro) {
      console.error('Erro ao buscar materiais:', erro)
    }
  }
  buscarMateriais()
}, [])

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