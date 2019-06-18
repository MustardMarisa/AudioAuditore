import React from 'react';
import Card from "./houseCard";


class Register extends React.Component {


    state = {
        counter: 0,
        houses: []
    }

    addNewHouse = () =>{

        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return (
            <div>
                
                <div>
                    <button onClick={this.addNewHouse}>CUCK!</button>
                    <p>{this.state.counter}</p>
                </div>
                
                {
                    //el parentesis, significa return (como previamente visto)

                    this.state.houses.map(house => (
                        <Card
                            //pasamos los props
                            name={house.name}
                            desc={house.desc}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Register;