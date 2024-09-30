import './App.css'
import { Header } from './header'
import { Recept } from './recept'
import { Footer } from './footer'

function App() {


  return (
    <div>
      <Header />
      <br />
      <Recept fo = {'2'} />
      <br />
      <Recept fo = {'4'} />
      <br />
      <Footer />
    </div>
  )
}

export default App
