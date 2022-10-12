import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/index';
import './styles.css'
import { useContext } from 'react';
import { CartContext } from '../CartContext';



const ItemDetail = ({items}) => {

  const [count, SetCount] = useState(0);
  const ctx= useContext(CartContext);
  
  const addCart = (count) => {
    alert('SELECCIONASTE ' + count + ' ARTICULOS')
    console.log(count)
    SetCount(count)
    ctx.addItem(items, count)
  }

  return (
    <div className="cardDetail card">
      <div className="col-md-6">
        <img className='card-img-top' src={items.pictureUrl} alt=""/>
      </div>
      <div className=''>
        <div className="card-body">
          <h5 className='card-title'>{items.title}</h5>
          <p className="card-text">{items.description}</p>
          <h5 className='card-text'>${items.price}</h5>
          <p className='card-text'>Unidades en stock: {items.stock}</p>
        </div>
      </div>
      <div className='count'>
      {count === 0 ? 
        <ItemCount stock ={items.stock} initial={1} onAdd={addCart}/> 
        :
        <Link className='btnAdd btn btn-dark btn=lg' to='/cart'><p>CHECKOUT</p></Link>
      }
      </div>
    </div>
  )
}


export default ItemDetail;