import { useState } from "react";
import Boti from "./Boti";



function Mensagem(){

    const [nome, setNome] = useState('')
    const [contador, setContador] = useState(0)
    const [mostrar, setMostrar] = useState(false)
 
    function actionOnClick(){
        setNome('Pimbada')
        setContador(contador+1)
        setMostrar(!mostrar)
    }

    return(
        <div>
            
            <Boti  event={actionOnClick} text="Aperte" mostrar={mostrar} />
{/* 
            {nome}
            <p>
            {contador}
            </p> */}

            

        </div>
    )
}

export default Mensagem;


