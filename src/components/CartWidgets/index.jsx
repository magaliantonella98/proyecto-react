import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const CartWidgets = () => {
  return (
    <div>

        <Link className='text-decoration-none'to='/cart'>
          <div className="nav-link">
            <FontAwesomeIcon icon={faCartShopping}/>
            <span className='position-absolute translate-middle badge rounded-pill bg-danger'>
              1
            </span>
          </div>
        </Link>
    </div>
  )
}

export default CartWidgets