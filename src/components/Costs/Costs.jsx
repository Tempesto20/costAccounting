import React,{useState} from 'react';
import Card from '../UI/Card';
//import CostItem from './CostItem';
import CostList from './CostList';
import './Costs.css';
import CostsDiagram from './CostsDiagram';
import CostsFilter from './CostsFilter';

const Costs = (props) => {

  const [selectedYear, setSelectedYear] =useState('2019');

const yearChangeHandler =(year)=>{
 // console.log(year);
  setSelectedYear(year);
}

  const filteredCosts = props.costs.filter(cost =>{
    return cost.date.getFullYear().toString() === selectedYear
  })
  
  //setSelectedYear('');
  

  

return (
    <div className="">
      
      <Card className='costs'>
      
        <CostsFilter 
          year={selectedYear}
          onChangeYear = {yearChangeHandler}
        />

          <CostsDiagram costs={filteredCosts}/>

        <CostList costs={filteredCosts}/>

          {/*          
          {filteredCosts.length === 0   
                && 
            <p> в этом году расходов не имеется</p>}

          {filteredCosts.length > 0  
              &&
            filteredCosts.map(  (cost) =>(
              <CostItem 
                key={cost.id}
                date={cost.date}
                description={cost.description}  
                amount={cost.amount}
              />
            )
          )}
          */}
          


          {/*
            <CostItem 
            date={props.costs[0].date}
            description={props.costs[0].description}
            amount={props.costs[0].amount}
            />

            <CostItem 
              date={props.costs[1].date}
              description={props.costs[1].description}
              amount={props.costs[1].amount}
            />
            
            <CostItem 
              date={props.costs[2].date}
              description={props.costs[2].description}
              amount={props.costs[2].amount}
            />
          */}
    
      </Card>
    
    </div>
    
  );
}

export default Costs;