const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3001

const User= mongoose.model('User', new mongoose.Schema({
   nombre: String,
   cargo: String,
 }))
 
 mongoose.connect('mongodb://gus:clavesecreta@usuarios-mongo:27017/app?authSource=admin')
 
 app.get('/', async (_req, res) => {
   console.log('listando... usuarios...')
   const usuarios = await User.find();
   return res.send(usuarios)
 })
 app.get('/crear', async (_req, res) => {
   console.log('creando...')
   await User.create({ nombre: 'Gus', cargo: 'Developer' })
   return res.send('ok')
 })
 


app.listen(port, () => console.log('Consultado Usuarios...'))