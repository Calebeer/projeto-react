function Boti(props){
    
    return(
        <div>
            
            <p>Clique no botão</p>
            <button type="submit"  onClick={props.event} >{props.text}</button>

            ..
            {props?.mostrar && (
                <div>
                    OPA
                </div>
            )}
        </div>
    )
}

export default Boti;