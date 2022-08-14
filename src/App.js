import CostItem from "./components/CostItem";

function App() {
  
  const costs =[

    {
      date: new Date(2021, 1, 1),
      description: 'Холодильник',
      amount: 100
    },
    
    {
      date: new Date(2021, 2, 2),
      description: 'Ноут',
      amount: 200
    },
    
    {
      date: new Date(2021, 3, 3),
      description: 'Чайник',
      amount: 300
    }

  ];      

  return (
    <div className="App">
      <header className="App-header">
      <h1>START PROJICT</h1>
        <CostItem 
          date={costs[0].date}
          description={costs[0].description}
          amount={costs[0].amount}
        />

        <CostItem 
          date={costs[1].date}
          description={costs[1].description}
          amount={costs[1].amount}
        />

        <CostItem 
          date={costs[2].date}
          description={costs[2].description}
          amount={costs[2].amount}
        />
        
      </header>
    </div>
  );
}

export default App;
