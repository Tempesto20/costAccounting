import React,{useState} from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost =(props)=> {

const[isFormVisible,setIsFormVisible] = useState(false);



const saveCostDataHendler =(inputCostData)=>{
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    //console.log(costData); 
    //console.log(inputCostDate); тут мы увидим данные которые были введены в объект costData
  props.onAddCost(costData);
  setIsFormVisible(false);
  }

  const inputCostDataHandler =()=>{
    setIsFormVisible(true);
  }

  const cancelCostHandler =()=>{
    setIsFormVisible(false);
  }



  return (
    <div className='new-cost'>
      {!isFormVisible &&<button onClick={inputCostDataHandler}>Добавить новый расход</button>}

      {isFormVisible && <CostForm 
        onSaveCostData={saveCostDataHendler}

        onCancel={cancelCostHandler}
      />}

    </div>
  );
//58
}

export default NewCost;