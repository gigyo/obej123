import React, { Component} from 'react';





class Componeta extends Component {

    constructor(props) {
        super(props);
        this.state ={
            age:29,
            name:props.name
        }
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>
                    Hola { this.state.name }
                </h1>
                <h2>
                    tu edad es { this.state.age }
                </h2>
            </div>
         );
    }
}
 
// Componeta.protType = {
//     name: PropType.string,
// }

export default Componeta;
