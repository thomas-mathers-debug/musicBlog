import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './style/Nav.css'


class Nav extends Component {

    render() {
        return (
            <div className = 'NavBar'>
                <img className = 'logo ' src = './images/logo.png' alt ="logo"/>
                <nav>
                        <div className = 'nav__links'>
                            <a className = 'nav__link' href="#">Music</a>
                            <a className = 'nav__link' href="#">Projects</a>
                            <a className = 'nav__link' href="#">About me</a>
                        </div>

                </nav>
                <a className = 'contact' href ='#'><button> Contact</button> </a>
            </div>
        )
    }
}

export default Nav
