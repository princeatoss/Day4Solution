import express from 'express'
import get from './rest/get.js'
import getcompany from './rest/getCompany.js'
import dotenv from 'dotenv';
dotenv.config();
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/',get)
app.get('/company',getcompany)
app.listen(`${process.env.PORT}`,()=>{
  console.log(`My Applition is running at ${process.env.PORT}`)
})

