import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';



const App = () => {
  // code goes here
let title = 'You clicked me';


  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter title={title}/>
      </header>
    </div>
  );
};

export default App;



















