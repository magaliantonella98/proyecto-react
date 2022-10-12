import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

const Item = ({id, price, title, pictureUrl}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <Link to={`/item/${id}`} type="button" className="btn btn-outline-secondary">Info</Link>
            </div>
            <img className='card-img-top' src={pictureUrl} alt=""/> 
            <div className="card-body">
                <h5 className='card-title'>{title}</h5>
                <h5 className='card-text'>${price}</h5>
            </div>
            
        </div>
    )
}

export default Item;