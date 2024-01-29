import logo from './logo.svg';
import './App.css';
import Hudini from './components/Hudini';

function App() {
  return (
    <div className="app">
      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          <Hudini/>
        </div>
      </div>
    </div>
  );
}

export default App;
