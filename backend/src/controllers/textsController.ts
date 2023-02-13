import { Request, Response } from "express"
import fs from "fs"
import { v4 as uuidv4 } from 'uuid'


const jsonTexts = fs.readFileSync("src/texts.json", "utf-8") 
let texts = JSON.parse(jsonTexts)

export const getAllTexts = (_req:Request, res:Response)=> {
    res.status(200).json(
        texts
    )
}

export const addText = (req: Request, res:Response)=>{

    const { mensaje } = req.body
    

    if(!mensaje){
    res.status(400).json({msg:"Debes escribir un texto"})
    return
    }

    let newText = {
        mensaje,
        id:uuidv4()
    }

    texts.unshift(newText)

    const jsonTexts = JSON.stringify(texts)
    fs.writeFileSync("src/texts.json", jsonTexts, "utf-8")


    res.json({
        msg:"texto añadido exitosamente",
        texts

    })
}