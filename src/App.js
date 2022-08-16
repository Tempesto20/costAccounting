import Costs from "./components/Costs/Costs";



const App = () => {
  
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
        <Costs 
              costs={costs}
              />

      </header>
    </div>
  );
}

export default App;
