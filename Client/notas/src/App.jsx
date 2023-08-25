import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Navegacion';
import Tablas from './Components/Tablas';

function App() {
  return (
    <>
      <div className="App">
        <Navegacion/>
        <div className='mt-5 container'>
        <Tablas/>
        </div>
      </div>
    </>
  )
}

export default App;
