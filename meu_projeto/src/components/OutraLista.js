function OutraLista({itens, index}){
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {
                itens.map((item) => (
                    <p key={index} >{item}</p>
                ))
            }
        </>
    )
}   

export default OutraLista;