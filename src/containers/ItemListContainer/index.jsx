import {useEffect, useState} from 'react';
import ItemList from '../../components/ItemList';
import { db } from '../../components/utils/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
  const [datos, setDatos] = useState ([]);
  //const {idCategory} = useParams();

    useEffect(async()=>{
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFirestore = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
      setDatos(dataFromFirestore)
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }, [datos]);

    useEffect(() => {
      return(() => {
          setDatos([])
      })
    }, [])

    return(
      <ItemList items={datos}/>
    );
}

export default ItemListContainer;