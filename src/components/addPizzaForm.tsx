import React, {FC, useState} from "react";
import Pizza from "../models/Pizza";


interface addPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
  isOpen: boolean;
  onClose: (bol: boolean) => void;
}

const initState = {
  title: '',
  price: '',
  img: ''
}

const AddPizaForm: FC<addPizzaFormProps> = ({addPizza, isOpen, onClose}) => {

  const [newPizza, setNewPizza] = useState<{ title: string, price: string, img: string }>(initState)

  const handleClosePopupClick = () => {
    onClose(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value  
    })
    
  }

  const handleSabmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;

    if(title && price && img ) {
      addPizza({
        title, 
        price: Number(price), 
        img,
        id: Date.now()
      });
      setNewPizza(initState)
      handleClosePopupClick()
    }
  }

  console.log('новая пицца>>>', newPizza)

  return(
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
      <h2 className="popup__title">Добавление пиццы</h2>
        <form onSubmit={handleSabmit} className="popup__form">
          <fieldset className="popup__fieldset">
            <input className="popup__input" name="title" type="text" placeholder="Название" onChange={handleChange} value={newPizza.title} />
            <input className="popup__input" name="price" type="text" placeholder="Стоимость" onChange={handleChange} value={newPizza.price} />
            <input className="popup__input" name="img" type="text" placeholder="Номер изображения от 1 до 6" onChange={handleChange} value={newPizza.img} />
          </fieldset>
          <button type="submit" className="popup__save-button">Добавить в меню</button>
        </form>
        <button type="button" className="popup__close-button" onClick={handleClosePopupClick}></button>
      
      </div>
    </div>
  )  

}

export default AddPizaForm;