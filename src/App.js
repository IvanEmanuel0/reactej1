import logo from './logo.svg';
import './App.css';
import ListaContactoComponent from './components/containers/lista_contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaContactoComponent></ListaContactoComponent>
      </header>
    </div>
  );
}

export default App;
