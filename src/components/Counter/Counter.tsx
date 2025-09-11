import { useState } from "react"; // импорт хука useState из библиотеки react
// rfc -> react functional component

// функциональный компонент

export default function Counter() {
    // useState - хук для создания состояния в функциональном компоненте
  const [counter, setCounter] = useState(0);
  // - правила использования хуков
  // - можно использовать только в функциональных компонентах
  // переменная состояния == state
  // функция setter - вызвывать ререндер компонента
  // Что нужно запомнить о каждом хук?
  // - что принимает? Начальное значение переменной состояния.
  // - что возвращает? Создает стейт, изменения которго вызывают ререндер
    // - когда использовать? Когда нужно создать состояние в функциональном компоненте


  // инкремент
  function handleAddOne() {
    setCounter(counter + 1); // изменение значения состояния
  }
    // сброс
  function handleResetCounter() {
    setCounter(0);
  }
  // декремент
  function handleMinusOne() {
    setCounter(counter - 1); // изменение значения состояния
  }


  return (
    <div>
      <h2>{counter}</h2>

      <button type="button" onClick={handleAddOne}>
        +1
      </button>
     <button type="button" onClick={handleResetCounter}>
        Reset
      </button>
      <button type="button" onClick={handleMinusOne}>
        -1
      </button>
      
    </div>
  );
}


