import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import './styles.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const ctx= useContext(CartContext);
  if (ctx.cartList.length===0){
    return <div className='d-flex flex-column p-2'>
      <div>
        <Link className='text-decoration-none'to='/'><button className='deleteAll btn btn-dark'>SEGUIR COMPRANDO</button></Link>
      </div>
      <div className='d-flex justify-content-center'>
        <p>Carrito vacio</p>
      </div>  
    </div>
  }
  return (
    <>
    <div className="d-flex justify-content-center">
      <h1>Resumen de compra</h1>
    </div>
    <div className="d-grid gap-4 d-md-flex justify-content-md-end">
      <button className='deleteAll btn btn-light' onClick={ctx.clear}>ELIMINAR TODO</button>
    </div>
    {
      ctx.cartList.map(items=>
      <div className="card col-md-8">
        <div className="row card-body">
          <div className="col-md-4">
            <img src={items.pictureUrl} className="img-fluid rounded-start" alt=""/>
          </div>
          <div className="col-md-3">
            <div>
              <h5 className="card-title">{items.title}</h5>
              <p className="card-text">${items.price}</p>
            </div> 
          </div>
          <div className="col-md-2">
            <h5 className="card-text">{items.count} Item</h5>
          </div>
          <div className="col-md-3">
            <button className='deleteAll btn btn-dark' onClick ={()=>ctx.removeItem (items.id)}>Eliminar</button>
          </div>
        </div>                 
      </div>)
    }
  </>
)
}



export default Cart;