import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";



const App = () => {
  
  const costs =[

    {
      id: 'c1',
      date: new Date(2021, 1, 1),
      description: 'Холодильник',
      amount: 100
    },
    
    {
      id: 'c2',
      date: new Date(2021, 2, 2),
      description: 'Ноут',
      amount: 200
    },
    
    {
      id: 'c3',
      date: new Date(2021, 3, 3),
      description: 'Чайник',
      amount: 300
    }

  ];      

  const addConstHandler =(cost)=>{
    console.log(cost); 
    console.log('app'); 

    }
    

  return (
    <div className="App">
      <header className="App-header">

      <NewCost 
        onAddCost={addConstHandler}
      />

      <Costs 
            costs={costs}
      />

      </header>

    </div>
  );
}

export default App;
