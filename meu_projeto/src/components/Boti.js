function Boti(props){
    
    return(
        <div>
            
            <p>Clique no botão</p>
            <button type="submit"  onClick={props.event} >{props.text}</button>

            ..
        </div>
    )
}

export default Boti;