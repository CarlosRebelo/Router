import React from 'react'
import './myCard.css'
import './Title.css'
import './Image.css'

let Product = (props) => {
    return(
        <div className='myCard'>
            <div className='image'>
                <img src={props.image}/>
            </div>
            <div className='price'>
                <p><b>Title:&nbsp;</b></p>
                <p>{props.description}</p>
            </div>
            <div className='price'>    
                <p><b>Price:&nbsp;</b></p>
                <p>{props.price}</p>
            </div>
            <div className='discount'>
                <p><b>Price Discount:&nbsp;</b></p>
                <p>{props.discount}</p>
            </div>
        </div>
    )
}

export default Product