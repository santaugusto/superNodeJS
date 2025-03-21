const express = require('express')
const bcrypt = require('bcrypt')
const db = require('./db')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const app = express()
app.use(express.json())
const secretKey = process.env.SECRET_KEY

async function verificarToken(token) {
    try {
        const decodificar = jwt.verify(token, secretKey)
        return decodificar
    } catch (erro) {
        return 'token invalido'
    }
}

async function gerarHash(senha) {
    const saltRound = 10
    const hash = await bcrypt.hash(senha, saltRound)
    return hash
}

async function compararSenha(senha, hashArmazenado) {
    const resultado = await bcrypt.compare(senha, hashArmazenado)
    return resultado

}

async function inserirUsuario(nome, email, senha) {
    const sql = 'INSERT INTO usuario (nome,email,senha) values(?,?,?)'

    senha = await gerarHash(senha)

    db.query(sql, [nome, email, senha], (err, results) => {
        if (err) {
            console.log('erro ao inserir dados:', err)
            return
        }
        return `Dados inseridos com sucesso!! ${results.insertId} `

    })
}

app.post('/cad', (req, res) => {
    const { nome, email, senha } = req.body;
    inserirUsuario(nome, email, senha)
    const token = jwt.sign({ email: email, nome: nome }, secretKey, {
        expiresIn: '1h'
    });
    return res.status(200).json({ acces_token: token })
})

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM USUARIO';
    db.query(sql, (err, restuls) => {
        if (err) {
            console.log(err)
            return
        }

        return res.json({ data: restuls })

    })

})
app.listen(3000, () => { })

