import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const Item = ({product_id, product_name, price, image, description, rating,}) => {
    const Rating = []

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) Rating.push(<i className='fas fa-star'/>)
        else Rating.push(<i key={i} className='far fa-star'/>)
    }

    return (
        <div className='card m-2' key={product_id}>
            <div className='card-img-top text-center'>
                <Link to={`/products/${product_id}`}>
                    <img src={image} alt={product_name} className='img-fluid'/>
                </Link>
            </div>
            <div className="card-body">
                <div className='card-title fs-4 fw-bold'>
                    <Link to={`/products/${product_id}`}>{product_name} </Link>
                </div>
                <div className='card-text'>{description}</div>
            </div>
            <div className="card-footer">
                <div className='d-flex justify-content-between align-self-center'>
                    <span style={{color: '#FF9F1C'}}>{Rating}</span>
                    <h6>${Number(price).toLocaleString()}</h6>
                </div>
            </div>
        </div>
    )
}

export default Item
