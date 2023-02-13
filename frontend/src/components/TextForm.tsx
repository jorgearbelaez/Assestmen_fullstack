import { useState,ChangeEvent, FormEvent, useRef } from "react"
import {Text} from "../interfaces/Text"
import { createText } from "../services/TextService"
import styles from "../css/textForm.module.css"

import Alert from "./Alert"


type InputChange = ChangeEvent<HTMLInputElement>
type Error= boolean


const TextForm = ():JSX.Element => {

    const inputFocus = useRef<HTMLInputElement>(null)
    const [text, setText] = useState<Text>({mensaje:""})
    const [texts, setTexts] = useState<Text[]>([])
    const [error, setError] = useState<Error>(false)

    const handleInputChange = (e:InputChange )=>{
        setText({...text,[e.target.name]:e.target.value})

    }

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(!text.mensaje){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
            return
        }
        const { data } = await createText(text)
       
        setTexts(data.texts)
        setText({mensaje:""})
        inputFocus.current?.focus()
        
    }

    return (
    <>
        <div className={styles.main}>
            <h1 className={styles.tittle}>Añade un Texto</h1>
            
            <form className={styles.flex}
                onSubmit={handleSubmit}>

                <input 
                    className={styles.input} 
                    type="text" 
                    name="mensaje"
                    maxLength={50}
                    placeholder="Ingresa un texto" 
                    onChange={handleInputChange}
                    value={text.mensaje}
                    autoFocus
                    ref={inputFocus}
                />
                <button>
                    Enviar                
                </button>
                {error && <Alert >
                    <div className={styles.error}>
                        <h1>Error!! </h1>
                        <p>El campo no puede estar vacío</p>
                    </div>
                 </Alert>}
            </form>   
        </div>
        <hr />
        <div>
            {texts.length>0 && (
                texts.map((text)=> {
                    return(
                    <div key={text.id} className={styles.show}>
                        <h1 className={styles.txt}>{text.mensaje}</h1>
                    </div>
                    )
                })
            )}            
        </div>
    </>    
  )
}

export default TextForm