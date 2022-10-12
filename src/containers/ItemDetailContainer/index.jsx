import {useEffect, useState} from 'react';
import ItemDetail from '../../components/ItemDetail/index';
import customFetch from '../../components/utils/promesa';
import products from '../../components/utils/datos';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
    const {idItem} = useParams();

    useEffect(() =>{
      customFetch(2000, products.find (item => item.id === parseInt(idItem)))
        .then(resolve => setDato(resolve))
        .catch(err=> console.log.log(err))
    }, [idItem]);
    
    return(
       <ItemDetail items={dato}/>
        
      );
}

export default ItemDetailContainer;