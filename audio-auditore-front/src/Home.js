import React, { Component } from "react";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


class Home extends Component {

    alerta() {
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            onOpen: () => {
                // `MySwal` is a subclass of `Swal`
                //   with all the same instance & static methods
                MySwal.clickConfirm()
            }
        }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })
    }

    render() {
        return (
            <div>
                <h2>HELLO</h2>

                <button class="button animated shake" onClick={this.alerta}>click me</button>

                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        );
    }
}

export default Home;