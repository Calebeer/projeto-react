import { useState } from 'react';

function Form(){
    // function cadastrarUsuario(e){
    //     e.preventDefault()
    //     console.log('Cadastrou o usuário');
    // }
    
    const [nameInput, setNameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const handleNameInputChange = (event) => setNameInput(event.target.value)
    const handlePasswordInputChange = (event) => setPasswordInput(event.target.value)

    function dados(event){
         event.preventDefault()
         console.log(`email:${nameInput},senha:${passwordInput}`)
         if(nameInput == 'Calebe' && passwordInput == '8102'){
            console.log('Logado com sucesso')
         }else{
            console.log('Usuário ou senha incorretos');
         }
    }


    return(
        <div>
           <h1>Cadastro</h1>
           <form  >
            <label>Nome</label>
            <input type="text" name='name' placeholder="Digite o seu nome" onChange={handleNameInputChange}  />
            <label>Senha</label>
            <input type="password" name='password' placeholder="Digite sua senha" onChange={handlePasswordInputChange}  />
            {/* <input type="submit" value="cadastrar" /> */}
            <button onClick={dados}  >Cadastrar</button>
           </form>
        </div>
    )
}

export default Form;