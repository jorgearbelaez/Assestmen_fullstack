import axiosClient from "../config/axios"
import { Text } from "../interfaces/Text"

export const getAllTexts= async ()=>{
     return await axiosClient.get("/texts")    
}
export const createText= async (text:Text)=>{
     return await axiosClient.post("/texts", text)    
}