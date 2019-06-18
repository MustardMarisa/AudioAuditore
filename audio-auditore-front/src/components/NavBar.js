import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <a href="/">Este es el navbar</a>
                <form action="">
                    <input type="text"/>
                </form>
            </nav>
        );
    }
}

export default NavBar;