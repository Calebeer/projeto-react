import HelloWorld from "./HelloWorld";

function Evento({ numero }){
   function meuEvento(){
    console.log(`Foi ativado ${numero}`)
   }

   function pegar(){

   }
   
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento} >Ativar</button>
        </div>
    )
}

export default Evento;