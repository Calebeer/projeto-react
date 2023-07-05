function SeuNome({setNome}){
    
    function enviar(e){
        return(
            <p>dasda</p>
        )
        
    }
    
    return(
        <div>
            <h1>Digite seu nome:</h1>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}
              />

            <p></p>
        </div>
        
    )
}

export default SeuNome;