//import React, {useState} from 'react';
import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';


const CostItem = (props) => {
  
  /*
  const [description, setDescription] = useState(props.description);
  const chengeDescriptioHamdler= ()=>{
    setDescription('new text');
  }
*/

  return (
    <li>
      <Card className='cost-item'> 
        <CostDate date={props.date}/>
  
        <div className='cost-item__description'>

          <h2> {props.description} </h2>
          <div className='cost-item__price'> {props.amount} </div>
        </div>
        {/*<button onClick={chengeDescriptioHamdler}>Chenge description</button>*/}
      </Card>
    </li>
  );
}

export default CostItem;  