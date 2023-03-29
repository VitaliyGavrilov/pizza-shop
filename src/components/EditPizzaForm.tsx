import React, {FC, useState} from "react";
import Pizza from "../models/Pizza";


interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleTogleEdit: () => void;
}


const EditPizzaForm: FC<EditPizzaFormProps> = ({data, updatePizza, handleTogleEdit}) => {

  const [editPizza, setEditPizza] = useState<Pizza>(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setEditPizza({
      ...editPizza,
      [name]: value  
    })
    
  }

  const handleSabmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;

    if(title && price && img ) {
      updatePizza(editPizza);
      handleTogleEdit()
    }
  }

  console.log('edit pizza>>>>', editPizza)

  return(
    <form onSubmit={handleSabmit} className="edit-form">
      <input name="title" type="text" placeholder="Название" onChange={handleChange} value={editPizza.title} />
      <input name="price" type="text" placeholder="Стоимость" onChange={handleChange} value={editPizza.price} />
      <input name="img" type="text" placeholder="Изображение" onChange={handleChange} value={editPizza.img} />
      <button type="submit">Подтвердить</button>
    </form>
  )  

}

export default EditPizzaForm;