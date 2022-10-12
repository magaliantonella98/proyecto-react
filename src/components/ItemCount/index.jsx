import React, {useState} from 'react';
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = () => { if(count < stock) setCount(count+1)}

    const decrement = () => { if (count>1) setCount(count - 1) }

    return (
        <>
            <div style={{display: 'flex',alignItems: 'center',margin:'2rem'}}>
                
                <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                <p style={{margin:'1rem'}}>{count}</p>
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
                
            </div>
            <div className="d-grid gap-4">
                    <button type= 'button' className="btnAdd btn btn-dark btn=lg" onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</button>
            </div>
        </>
    )
}

export default ItemCount;