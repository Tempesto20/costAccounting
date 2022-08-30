import React from 'react';
import './Diagram.css';
import DiagramBar from './DiagramBar';

function Diagram(props) {

    const dataSetsValues = props.dataSets.map( dataSet => dataSet.value);

    const maxMonthCosts = Math.max(...dataSetsValues); //3 точки нужны чтобы получать значения через запятую

  return (
    <div className='diagram'>
        {
        props.dataSets.map( dataSet =>
            <DiagramBar 
                key={dataSet.label}
                value={dataSet.value} 
                maxValue={maxMonthCosts}  
                label={dataSet.label}
             />
                )
            }
    </div>
  )
}

export default Diagram;