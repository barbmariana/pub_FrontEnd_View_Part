
import { ModalContextProvider } from './Contexts/modalContext'
import Rotas from './Rotas/rotas'


function App() {
  return (
    <ModalContextProvider>
      <Rotas />
    </ModalContextProvider>


  )
}

export default App
