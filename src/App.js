import styles from './App.module.css';
import Job from './Job';
import List from './List'

function App() {
  const age = 15;
  const isGrean = true;
  
  return (
    <div className={styles.App}>
      {age>=19 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{color: isGrean ? "green" : "red" }}></h1>
       <Job salary={9000} title="Junior" company="Binance"/>
       <Job salary={20000} title="Middle" company="Okex"/>
       <Job salary={30000} title="Seniour" company="Mexc"/>
       {isGrean ? <button>Click me</button> : <h1>Cool</h1>}
       <List />
    </div>
  ); //40
}

export default App;
