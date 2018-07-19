import React from 'react'
import './Card.css'
import './Title.css'
import './Image.css'

let Content = (props) => {
    return(
        <div className='card'>
            <div className='picture'>
                <img className='cenas' src={props.image} />
            </div>
            <div className='title'>
                <p><b>Title:&nbsp;</b></p>
                <p>{props.title}</p>
            </div>
            <div className='description'>
                <p><b>Description:&nbsp;</b></p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Content