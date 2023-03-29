import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './singlePizza';

interface MainProps {
  addPizzaClick: () => void;  

  pizzasList: Pizza[];  
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const Main: FC<MainProps> = ({addPizzaClick, pizzasList, updatePizza, deletePizza}) => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <h1 className="profile__name">название пиццерии</h1>
          <p className="profile__profession">описание пиццерии</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Кнопка добавления фотографии" onClick={addPizzaClick} />
      </section>

      <section className="element">
        {pizzasList.map((pizza) => { return( 
          <SinglePizza 
            pizza={pizza} 
            key={pizza.id} 
            updatePizza={updatePizza} 
            deletePizza={deletePizza}
          />)
        })}
      </section>

    </main>
  )
}
export default Main;