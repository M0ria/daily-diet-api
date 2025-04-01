import 'dotenv/config'
import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import { resolve } from 'node:path'



const app = express()

app.use(cors())
app.use(express.json({ limit: '50MB' }))

export { app }

