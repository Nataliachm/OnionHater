import { handleChange } from './components/OnionHater.js'

function App() {


  return (
    <>
      <h1>Ejercicio OnionHater</h1>
      <textarea placeholder="Escribe algo" onChange={handleChange}></textarea>
    </>
  )
}

export default App
