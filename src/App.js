import './App.css';
import Job from './Job';

function App() {
  return (
    <div className="App">
       <Job salary={9000} title="Junior" company="Binance"/>
       <Job salary={20000} title="Middle" company="Okex"/>
       <Job salary={30000} title="Seniour" company="Mexc"/>
    </div>
  );
}

export default App;
