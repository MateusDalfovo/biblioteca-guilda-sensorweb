import Database from 'better-sqlite3'

console.log('Iniciando banco...')

/*Vai criar o biblioteca.db*/
const db = new Database('biblioteca.db')

/*Vai criar a tabela do banco de dados*/
db.prepare(`
    CREATE TABLE IF NOT EXISTS materiais(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        setor TEXT NOT NULL,
        assunto TEXT NOT NULL,
        descricao TEXT NOT NULL,
        link TEXT NOT NULL,
        criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`).run()

//Testa se a coluna Link já existe 
try {
    db.prepare(`
        ALTER TABLE materiais ADD COLUMN link TEXT
    `).run()

    console.log('Coluna link adicionada!')
} catch (erro) {
    console.log('Coluna link já existe!')
}


console.log('Banco de Dados Conectado!')
console.log('Tabela materiais pronta!')

export default db