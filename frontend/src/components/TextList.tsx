import { useEffect, useState } from "react"
import { Text } from "../interfaces/Text"
import { getAllTexts } from "../services/TextService"
import styles from "../css/textList.module.css"

const TextList = ():JSX.Element => {    

    const [texts, setTexts] = useState<Text[]>([])

    const loadTexts= async()=>{
        const {data} = await getAllTexts()
        setTexts(data)
    }

    useEffect(()=>{
        loadTexts()
    },[])

    return (
        <div >
            {texts.length>0 ? (
            texts.map((text)=> {
                return(
                <div key={text.id} className={styles.show}>
                    <h1 className={styles.h1}>{text.mensaje}</h1>
                </div>
                )
            })
            ) : (
               <h1 className={styles.h1}>No hay mensajes</h1>    
            )}     
        </div>
    )
}

export default TextList