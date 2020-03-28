import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './style/Tiles.css'
import Title from './Title'

class Tiles extends Component {

    render() {
        return (
            <div className = "tiles">
                <Title/>
            </div>
        )
    }
}

export default Tiles
