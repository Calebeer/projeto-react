
import { useState } from 'react';


//  const [nameInput, setNameInput] = useState('')
   //  const [passwordInput, setPasswordInput] = useState('')

   //  const handleNameInputChange = (event) => setNameInput(event.target.value)
   //  const handlePasswordInputChange = (event) => setPasswordInput(event.target.value)

   //  function dados(event){
   //       event.preventDefault()
   //       console.log(`email:${nameInput},senha:${passwordInput}`)
   //       if(nameInput == 'Calebe' && passwordInput == '8102'){
   //          console.log('Logado com sucesso')
   //       }else{
   //          console.log('Usuário ou senha incorretos');
   //       }
   //  }


   function Form(){
      function cadastrarUsuario(e){
          e.preventDefault()
          console.log(name,password)
          console.log('Cadastrou o usuário');
      }
  
      const[name, setName] = useState();
      const[password, setPassword] = useState()



    return(
        <div>
           <h1>Cadastro</h1>
           <form onSubmit={cadastrarUsuario} >
            <label htmlFor='name' >Nome</label>
            <input type="text" id='name' name='name' placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}  />
            <label htmlFor='password' >Senha</label>
            <input type="password" id='password' name='password' placeholder="Digite a sua senha"  onChange={(e) => setPassword(e.target.value)}  />
            <input type="submit" value="cadastrar" />
           </form>
        </div>
    )
}

export default Form;