import Relogio from './components/Relogio/Relogio' //usando o componente relogio
import Lowercase from './components/Lowercase/Lowercase' //usando o componente Lowercase
import './App.css'

function App() {
  return (
    <div className="app">
      <Relogio /> 
      <Lowercase info="TEXTO MAIUSCULO" />
    </div>
  )
}

export default App
