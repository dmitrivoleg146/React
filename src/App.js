import styles from './App.module.css';
import Job from './Job';
import List from './List'
import Planets from './Planets';
import Hook from './Hook'
import TodoList from './TodoList';
import ShowText from './ShowText';
import Api from './Api';
import Api2 from './Api2';
import Excuse from './Excuse';
import RoutesPractise from "./RoutesPractise";
import Forms from './Forms';
import Toggle from './Toggle';
import QueyCat from './QueyCat';

function App() {
  // const age = 15;
  // const isGrean = true;
  // const planets =[
  //   {name:"Mars" , isGasPlanet:true},
  //   {name:"Earth", isGasPlanet:true},
  //   {name:"Uranus", isGasPlanet:false},
  //   {name:"Neptune", isGasPlanet:false}
  // ]
  
  return (
    <div className={styles.App}>

      {/* {planets.map((planet,key)=> !planet.isGasPlanet &&
          <h1 key={key}>{planet.name}</h1>
      )} */}

      {/* //with {} works if in map, but for ternary we don't use them and not use a return */}
        {/* {age>=19 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{color: isGrean ? "green" : "red" }}></h1>
       <Job salary={9000} title="Junior" company="Binance"/>
       <Job salary={20000} title="Middle" company="Okex"/>
       <Job salary={30000} title="Seniour" company="Mexc"/>
       {isGrean ? <button>Click me</button> : <h1>Cool</h1>}
       <List />  */}
       {/* Stages of react lifecycle: mounting, updating, unmounting */}

       {/* <TodoList /> */}
       {/* <Api2/> */}
       {/* <Excuse/> */}
       {/* <RoutesPractise /> */}
       {/* <Forms/> */}
       {/* <Toggle/> */}
       <QueyCat />
       
    </div>
  ); 
}

export default App;
