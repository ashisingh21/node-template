import express from 'express'
import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import mongoConnect from './config/db.js'


const app = express();

// mongodb connect
mongoConnect();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`.bgCyan.white)
}) 
