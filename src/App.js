import React from 'react';
import './App.css';     //aceita a importação de arquivos .css
import Routes from './routes';

//se o componente nao tem state pode escrever ele em forma de função
//Exemplo:
//Isso
/*class App extends Component {    //pode-se criar component, e pode chama-lo como uma tag html <App />
  render() {    //obrigatorio dentro do component, retorna o conteudo html 
    return <Main />;
  }
}*/

//Se torna isso
/*
function App () {
  return <Main />
}
*/

//Ainda pode reduzir ainda mais, tranformando ela em ArrowFunction (mas apenas se ela tiver apenas um return)
const App = () => <Routes />;

export default App;
