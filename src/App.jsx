import './App.css'

import Header from './components/Header'
import Category from './components/Category'
import materiais from './data/materiais'

function App() {

  const categorias = [...new Set(
    materiais.map((material) => material.categoria)
  )]

  return (
    <div className="app">

      <Header />

      <main className="content">

        <h2>Materiais disponíveis</h2>

        {categorias.map((categoria) => (
          <Category
            key={categoria}
            nome={categoria}
            icone="📚"
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