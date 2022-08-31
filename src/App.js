import './App.css';
import contadorClicks from './imagenes/contador-clicks.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import {useState} from 'react';
function App() {
const [meGusta,setNumeroClick]= useState(0);
const [noGusta,setNumeroClick2]= useState(0);
  const siGustar = () => {
setNumeroClick(meGusta+1);
  }
  const noGustar = () => {
    setNumeroClick2(noGusta+1);
      }
  const reiniciarContador = () => {
    setNumeroClick(0);
    setNumeroClick2(0);
      }
  return (
    <div className="App">
      <div className='logo-container'>
<img 
className='logo'
src={contadorClicks}
alt=''>
</img>
      </div>
      <div className='container-principal'>
        <Contador
        numeroClick={meGusta}
        />
        <Contador
        numeroClick={noGusta}
        />
    <Boton
    texto='Me gusta'
    esBoton={"1"}
    manejarClick={siGustar}
    />
    <Boton
    texto='No me gusta'
    esBoton={"2"}
    manejarClick={noGustar}
    />
      <Boton
    texto='Reiniciar'
    esBoton={false}
    manejarClick={reiniciarContador}
    />
    
      </div>
    </div>
  );
}

export default App;
