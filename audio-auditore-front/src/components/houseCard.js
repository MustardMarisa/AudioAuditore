import React from 'react';

class houseCard extends React.Component{
    
    render(){

        //recibimos los props del padre 
        const {name , desc } = this.props;

        return(
            <div>
                <div>
                    <h5>{name}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        );
    }
}

export default houseCard;