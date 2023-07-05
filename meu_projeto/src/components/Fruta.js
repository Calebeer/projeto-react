function Fruta ({fruta}){
    return(
        <>
            {
                fruta.map((frutas,i) =>(
                    <p>{`${i+1}-${frutas}`}</p>
                ))
                
            }
        </>
    )
}

export default Fruta;