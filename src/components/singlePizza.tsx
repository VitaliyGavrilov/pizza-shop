import React, {FC, useState} from 'react';
import Pizza from '../models/Pizza';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import EditPizzaForm from './EditPizzaForm';

interface SinglePizzaProps {
  pizza: Pizza;  
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {

  const[edit, setEdit] = useState<boolean>(false);  

  const handleTogleEdit = () => {
    setEdit(!edit)
  }

  const handleDelete = () => {
    deletePizza(pizza.id)
  }

  return(
    <div className="element__container">
      <img src={`images/pizza-${pizza.img}.jpg`} alt={pizza.title} />
      <div className="element__block">
        <h2>{pizza.title}</h2>
        <span>{pizza.price} ₽</span>
      <div className='pizza-controls'>
        <AiFillEdit onClick={handleTogleEdit}/>
        <AiFillDelete onClick={handleDelete}/>
      </div>

      {edit
        ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleTogleEdit={handleTogleEdit}/>
        : null}
      </div>
    </div>
  )  
  
}
export default SinglePizza;