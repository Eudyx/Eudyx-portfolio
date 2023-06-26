import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <div className='row'>
        <Home />
      </div>
    </main>
  )
}

export default App
