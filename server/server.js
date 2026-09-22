import express from 'express'
import db from './database.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/materiais', (req, res) => {
    const { nome, setor, assunto, descricao, link } = req.body

    const resultado = db.prepare(`
        INSERT INTO materiais (nome, setor, assunto, descricao, link)
        VALUES (?, ?, ?, ?, ?)
    `).run(nome, setor, assunto, descricao, link)

    res.json({
        mensagem: 'Material cadastrado com Sucesso!',
        id: resultado.lastInsertRowid
    })
})

// Listar Materiais
app.get('/api/materiais', (req, res) => {
    const materiais = db.prepare('SELECT * FROM materiais').all()

    res.json(materiais)
})

// Vai rodar na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})