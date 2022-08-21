import React, {useState} from 'react';
import './CostForm.css';


 const CostForm =()=> {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    /*
    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    });
*/
    const nameChangeHandler =(event)=>{
        setInputName(event.target.value); //альтернативный вариант 
          //console.log(event.target.value);
        /*
        setUserInput({
            ...userInput, //сохраняем все предыдущие значения кроме name в объекте
            name:event.target.value
        });
        */
       /*
        setUserInput((previousState) =>{
            return {
                ...previousState,
                name:event.target.value
            }
        })
        */
    }

    const amountChangeHandler =(event)=>{
        setInputAmount(event.target.value); //альтернативный вариан
        /*
            setUserInput({
            ...userInput, //сохраняем все предыдущие значения кроме amount в объекте
            amount:event.target.value
        });
        */
    }

    const dateChangeHandler =(event)=>{
        setInputDate(event.target.value); //альтернативный вариан
        /*
          setUserInput({
            ...userInput, //сохраняем все предыдущие значения кроме date в объекте
            date:event.target.value
        });
        */
    }

//41

    const submitHandler=(event)=>{
        event.preventDefault(); //предотвращает перезапуск страницы при нажатии на кнопку
        
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(costData);
    }
  return (

        <form onSubmit={submitHandler}>

            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>

                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min='0.1' step='0.1' onChange={amountChangeHandler}/>
                </div>

                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler}/>
                </div>

                <div className="new-cost__actions">
                    <button type='submit' >Добавить расходы</button>

                </div>

            </div>

        </form>

  );
}

export default CostForm;