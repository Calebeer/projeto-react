import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'; 
import List from './components/List';

function App() {

  const nome = 'calebe'

  return (
    <div className="App">
      <List/>
      <HelloWorld/>
      <SayMyName nome= "Calebe" />
      <SayMyName nome= "Apollo" />
      <SayMyName nome= {nome} />
      <Pessoa 
            nome="Calebe" 
              idade="12" 
              profissao="Dev" 
              foto="https://via.placeholder.com/150"
              />

    </div>
  );
}

export default App;
