import styles from './HelloWorld.module.css'

function HelloWorld(){
    return(
        <div className={styles.Hello}>
            <h1>Meu primeiro Componente</h1>
        </div>
    )
}

export default HelloWorld;