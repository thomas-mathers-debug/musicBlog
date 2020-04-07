import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './style/Title.css'

class Title extends Component {

    render() {
        return (
            <div id = "tiletitle">
                <nav className = 'main_title'> Hi i'm Tom and i'm ready to be a star</nav>
                <nav className = 'main_title'> I'm a full-stack developer with a passion for music and creation </nav>
            </div>
        )
    }
}

export default Title
