import React from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost =(props)=> {

  const saveCostDataHendler =(inputCostData)=>{
    
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    //console.log(costData); 
    //console.log(inputCostDate); тут мы увидим данные которые были введены в объект costData
    
  props.onAddCost(costData);
  }

  return (
    <div className='new-cost'>
        <CostForm 
        onSaveCostData={saveCostDataHendler}
        />
    </div>
  );
}

export default NewCost;