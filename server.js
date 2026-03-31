const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const bicicletas = [
  { id: 1, nombre: "Mountain Bike", precio: 300000 },
  { id: 2, nombre: "BMX", precio: 200000 },
  { id: 3, nombre: "Ruta", precio: 500000 }
]

app.get('/api/bicicletas', (req, res) => {
  res.json(bicicletas)
})

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})