import Frase from "./components/Frase";
import HelloWord from "./components/HelloWord";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";


function App() {

  const nome = 'oi'

  return (
      <div>
        <h1>ok man</h1>
          <Frase/>

          <Pessoa nome= 'daniel' idade= "22" profissao="vagabundo de merda" foto= 'https://via.placeholder.com/300' />
          <SayMyName nome = {nome}/>
          <Frase/>
      </div>
  )
}

export default App
