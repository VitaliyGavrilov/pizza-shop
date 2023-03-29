
import React, {FC, useState} from 'react';
import './index.css';
import AddPizaForm from './components/addPizzaForm';
import Pizza from './models/Pizza';
// import DisplayPizzas from './components/displayPizza';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';



const App: FC = () => {
  // ---Cтейт-переменные:
  const [isAddPizzaPopupOpen, setIsAddPizzaPopupOpen] = useState<boolean>(false); // попап-Добавление карточки
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]); //

  // -Обработчик открытия попапа добавления карточки
  function handleAddPizzaClick() { setIsAddPizzaPopupOpen(true) }

  const addPizza = (newPizza: Pizza) => {
    setPizzaList ([...pizzaList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList (pizzaList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  const deletePizza = (id:number) => {
    const newPizzaList = pizzaList.filter(pizza => pizza.id !== id);
    setPizzaList(newPizzaList);
  }

  console.log('pizzaList >>>>>>', pizzaList)

  return (
    <div className="App page">
      <Header/>
      <Main
        addPizzaClick={handleAddPizzaClick}
        deletePizza={deletePizza}
        pizzasList={pizzaList}
        updatePizza={updatePizza}
      />
      <Footer/>
      <AddPizaForm //будет попап
        addPizza = {addPizza}
        isOpen={isAddPizzaPopupOpen}
        onClose={setIsAddPizzaPopupOpen}
      />
    </div>
  );
}


export default App;

//  ---ОБЬЯВЛЕНИЕ ПЕРЕМЕННЫХ
// let a: string = 'salmi';
// let b: number = 1;
// let c: boolean = true;
// let d: string[] = ['salmi', 'souse'];
// let f: number[] = [1, 2, 3];
// const order: {title: string, quantity: number} = {title:'margarita', quantity: 10};//будет работать, но нельзя переиспользовать

//  ---TYPE И INTERFACE
// type Order = {// или type или interface
//   title: string,
//   quantity: number,
//   price?: number// если свойство не обязательное 
// };
// const order: Order = {title:'margarita', quantity: 10};
// const orders: Order[] = [
//   {title:'margarita', quantity: 10},
//   {title:'margarita', quantity: 10, price: 1000}
// ];

//  ---ОБЬЕДИНЕНИЕ(UNION)
// let number: null | number = null;// или ноль или число
// number = 10

//  ---ТИП ДЛЯ ФУНКЦИИ
// const printTitle = (title: string) => {
//   console.log(title)
// };
// printTitle('hi');

//  ---ФУНКЦИИ
//пример 1
// type PrintTitle = (title: string) => void;//описываем вход и выход
// const printTitle: PrintTitle = (title) => {
//   console.log(title);
// };
// printTitle('hi');
//пример 2
// type PrintTitle = (title: string) => string;//описываем вход и выход
// const printTitle: PrintTitle = (title) => {
//   return title;
// };
// printTitle('hi');
// пример 3, когда функция вообще никогда не возвращает значение в том мчисле undefine, в редких случяях 
// type PrintTitle = (title: string) => never;//описываем вход и выход
// const printTitle: PrintTitle = (title) => {
//   // сложно придумать пример для функций, которые никогда не вернут значения, то ли по причине ее зацикленности, например, бесконечный цикл, то ли по причине ее прерывания
// };
// printTitle('hi');

//  ---КОГДА ТИП ДАННЫХ НЕИВЕСТЕН 
// const test: unknown = '   test  ';// но это накладывает ограничения на применение методов,например:
// console.log(test.trim())//метод трим не сработал, повилась ошибка

//  --- ПОДРОБНЕЕ О TYPE И INTERFACE
// type Order1 = {// нужен знак =
//   title: string,
//   quantity: number,
//   price?: number// если свойство не обязательное 
// };
// interface Order2 {// не нужен знак =
//   title: string,
//   quantity: number,
//   price?: number// если свойство не обязательное 
// };
//ОТЛИЧИЯ:
// В большинстве случаев псевдонимы types в TypeScript используются для создания псевдонимов более сложного типа, такого как объединение других типов, для повторного использования имени.
// С другой стороны, interfaces используются для более традиционных объектно-ориентированных целей, в которых мы определяем форму объекта, а затем используем его в качестве контракта для параметров функции или для реализации класса.
// Одним из наиболее существенных функциональных отличий между type и interface является то, что, с type у нас может быть объединение нескольких других type, а с interface, данная концепция не представляется возможной.
// Ещё одно функциональное различие между interface и type заключается в том, что если у нас два interface с одинаковыми именами, при использовании они будут объединены вместе. Мы получим доступ к свойствам 1 и 2 интерфейса.
//прмиеры:
// type X ={
//   a:string,
//   b:number
// }// мы можем рвсширить Y свойствами из X
// type Y = X & {
//   c:string,
//   d:number
// }
// let aa: Y = {
//   a: 'test',
//   b: 1,
//   c: 'testt',
//   d: 2
// }
// иожк самое с интерфейчасми 
// interface X {
//   a:string,
//   b:number
// }// мы можем рвсширить Y свойствами из X
// interface Y extends X {
//   c:string,
//   d:number
// }
// let aa: Y = {
//   a: 'test',
//   b: 1,
//   c: 'testt',
//   d: 2
// }
//Так же мы можем расширять свойства типов интефейчасми и наоборот 
// type X = {
//   a:string,
//   b:number
// }// мы можем рвсширить интерфейс-Y свойствами из типа-X, если наоборот то используем &
// interface Y extends X {
//   c:string,
//   d:number
// }
// let aa: Y = {
//   a: 'test',
//   b: 1,
//   c: 'testt',
//   d: 2
// }