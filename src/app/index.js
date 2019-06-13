import React, {Componet} from 'react';
import { render } from 'react-dom';

//sintaxis de jsx
class App extends Componet{
    render(){
        return(
            <h1>Hola mundo</h1>
        )
    }
}

render(<App/>,document.getElementById('app'));