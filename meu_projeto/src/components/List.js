import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
               <Item marca="Ferrari" ano_lancamento={1985} />
               <Item marca="Fiat" ano_lancamento={1983} />
               <Item marca="Jeep" ano_lancamento={2004} />

            </ul>
        </>
    )
}

export default List;