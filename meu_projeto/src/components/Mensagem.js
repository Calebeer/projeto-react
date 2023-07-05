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
            
            <Boti  event={actionOnClick} text="Aperte" />
{/* 
            {nome}
            <p>
            {contador}
            </p> */}

            {mostrar && (
                <div>
                    OPA
                </div>
            )}

        </div>
    )
}

export default Mensagem;


