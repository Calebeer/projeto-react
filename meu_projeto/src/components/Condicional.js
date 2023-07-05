import {useState} from 'react';

function Condicional(){
    
    const [email,setEmail] = useState();
    const [userEmail, setUserEmail] = useState()


    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail);
    }
    

    function limparEmail(){
        setUserEmail('')
    }


    return(
        <div>
            <h1>Cadastre seu usuário</h1>
            <form>
                <input type='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value) } />
                <button type='submit' onClick={enviarEmail} >Enviar email</button>
                {userEmail  && (
                    <div> 
                        <p>email cadastrado, o email é {userEmail}</p>
                        <button onClick={limparEmail} >limpar email</button>
                    </div> 
                ) 
                }
            </form>
        </div>
    )
}

export default Condicional;