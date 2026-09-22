import { useState } from 'react'

function FormularioModal({ onSalvar, onCancelar }) {

    const [nome, setNome] = useState('')
    const [setor, setSetor] = useState('')
    const [assunto, setAssunto] = useState('')
    const [descricao, setDescricao] = useState('')
    const [link, setLink] = useState ('')

async function handSubmit(event) {
        event.preventDefault()

        const novoMaterial = {
            nome, 
            setor,
            assunto,
            descricao,
            link
        }

 console.log('Vou enviar:', novoMaterial)

        try {
                const resposta = await fetch('http://localhost:3000/api/materiais', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(novoMaterial)
                })

                const dados = await resposta.json()

                console.log('Resposta do servidor:', dados)

                onSalvar(novoMaterial)

            } catch (erro) {
                console.error('Erro ao cadastrar material:', erro)
        }
    }

    return (
        <form onSubmit={handSubmit} className='formulario-material'>
            <h2 className='title-forms'>Adicionar Informações</h2>

            <div className='form-group'>
                <label>Nome:</label>

                <input 
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder='Seu Nome'
                required
                />
            </div>


            <div className='form-group'>
                <label>Setor:</label>

                <input 
                type="text"
                value={setor}
                onChange={(event) => setSetor(event.target.value)}
                placeholder='Informe seu Setor'
                required
                />
            </div>


            <div className='form-group'>
                <label>Assunto:</label>

                <input 
                type="text"
                value={assunto}
                onChange={(event) => setAssunto(event.target.value)}
                placeholder='Qual o Assunto'
                required
                />
            </div>


            <div className='form-group'>
                <label>Descrição:</label>

                <input 
                type="text"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                placeholder='Descrição do Assunto'
                required
                />
            </div>


            <div className='form-group'>
                <label>Link:</label>

                <input 
                type="text"
                value={link}
                onChange={(event) => setLink(event.target.value)}
                placeholder='Link do Direcionamento'
                required
                />
            </div>

            <div className='form-buttons'>
                <button className='cancel-button' type='button' onClick={onCancelar}>Cancelar</button>
                <button className='save-button' type='submit'>Salvar</button>
            </div>

        </form>
    )
}

export default FormularioModal