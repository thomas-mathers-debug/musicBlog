import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './style/Nav.css'


class Nav extends Component {

    render() {
        return (
            <div className = 'NavBar'>
                <img className = 'logo ' src = './images/logo.png' alt ="logo"/>
                <nav>
                        <ul className = 'nav__links'>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">About me</a></li>
                        </ul>

                </nav>
                <a className = 'contact' href ='#'><button> Contact</button> </a>
            </div>
        )
    }
}

export default Nav
