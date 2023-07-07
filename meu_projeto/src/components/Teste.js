import { useState } from "react";

function Teste(){
    

const [mais,setMais] = useState(0);
const [number0, setNumber0] = useState(false);

const Mais = () =>{ 
    setNumber0(true)
    setMais(mais+1);
    console.log(mais);
}

const Menos = () =>{
    setMais(mais-1);
    console.log(mais);
}
       
    return(
        <div>
            <h1>Clique</h1>
            <button type="submit" onClick={Mais}>+</button>
            <button type="submit" onClick={Menos} >-</button>
            <h3>
                {number0 &&(
                    mais
            )
            }
            </h3>
        </div>
    
    )
}

export default Teste;