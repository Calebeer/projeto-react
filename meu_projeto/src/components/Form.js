function Form(){
    function cadastrarUsuario(){
        
    }
    
    
    return(
        <div>
           <h1>Cadastro</h1>
           <form onSubmit={cadastrarUsuario} >
            <label>Nome</label>
            <input type="text" placeholder="Digite o seu nome" ></input>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" ></input>
            <input type="submit" value="cadastrar" />
           </form>
        </div>
    )
}

export default Form;