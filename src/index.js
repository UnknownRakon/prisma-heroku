const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(express.static('public'))


app.get(`/api`, async (req, res) => {
  res.json({ up: true })
})

app.get(`/api/user/:id`, async (req, res) => {
  const { id } = req.params
  const result = await prisma.user.findUnique({
    where: {
      id: String(id),
    }
  })
  res.json(result)
})

app.post(`/api/createUser`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
})

app.put(`/api/updateUser/:id`, async (req, res) => {
  const { id } = req.params
  const result = await prisma.user.update({
    where: {
      id: String(id),
    },
    data: {
      ...req.body,
    },
  })
  res.json(result)
})


const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${PORT}\n⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`,
  ),
)
