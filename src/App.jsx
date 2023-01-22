import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ResultadosFor from './components/ResultadosFor';


const App = () => {

    const [state, setState] = useState({
        Name: "",
        LastName: "",
        Email: "",
        Password: "",
        confirmPassword: "",
    });
    return (
        <div className='App'>
            <h1>Hello Dojo!</h1>
            <Formulario datitos={state} setDatitos={setState}></Formulario>
            <ResultadosFor datitos={state}></ResultadosFor>
        </div>
    );
}


export default App;





