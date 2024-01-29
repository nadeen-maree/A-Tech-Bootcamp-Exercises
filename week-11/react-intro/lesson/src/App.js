//default
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


//-----------------------------------------------------------------------------------------------------
//Exercise 1:
/*
import './App.css';

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]
  const showCompany = (name, revenue) => {
    const returnSentence = `<div id="${name}">${name} makes ${revenue} every year</div>`
    
  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
          {returnSentence}
      </div>
    </div>
  )
  }

  return(
    companies.map(c => showCompany(c.name, c.revenue))
  )
}

export default App;
*/


//-----------------------------------------------------------------------------------------------------
//Exercise 2:
import './App.css';
function App() {
  const getClassName = (temperature) => {
    let str = ""
    if (temperature < 15){
      str = "freezing"
    }else if(temperature >= 15 && temperature <= 30){
      str = "fair"
    }else{
      str = "hell-scape"
    }
    return str
   }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
      <div id="weatherBox" class={getClassName(3)}>{getClassName(3)}</div>
      <div id="weatherBox" class={getClassName(16)}>{getClassName(16)}</div>
      <div id="weatherBox" class={getClassName(35)}>{getClassName(35)}</div>
      </div>
    </div>
  )
}

export default App;