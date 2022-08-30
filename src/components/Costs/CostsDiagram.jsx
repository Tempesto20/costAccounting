import React from 'react';
import Diagram from '../Diagram/Diagram';

function CostsDiagram(props) {

    const diagramDataSets = [
        {label: 'Jan', value:0},
        {label: 'Feb', value:1},
        {label: 'Mar', value:2},
        {label: 'Apr', value:3},
        {label: 'May', value:4},
        {label: 'Jun', value:5},        
        {label: 'Jul', value:6},
        {label: 'Aug', value:7},
        {label: 'Sep', value:8},
        {label: 'Oct', value:9},
        {label: 'Nov', value:10},
        {label: 'Dec', value:11}
    ];


    for( const cost of props.costs ){
        const costMonth = cost.date.getMonth();
        diagramDataSets[costMonth].value += cost.amount;
    }

  return (
    <div>
    <Diagram 
    dataSets={diagramDataSets}/>
    </div>
  )
}

export default CostsDiagram;