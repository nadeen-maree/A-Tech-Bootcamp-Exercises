//import logo from './logo.svg';
import './App.css';

function SignUp (){
  return <p>SignUp</p>
}

function Blurb (){
  return <p>Blurb</p>
}

function AboutUs() {
  return(
    <div>
      <div>
        <SignUp/>
        <Blurb/>
      </div>
      
    </div>
    
  ) 
}

function Nav() {
  return (
      <div id="nav">
          <span>Home</span>
          <span>About</span>
      </div>
  )
}

function LandingPage() {
  return <h1>Welcome!</h1>
}

export function App() {
  return (
      <div className="app">
          <Nav />
          <AboutUs/>
          <LandingPage/>
      </div>
  )
}




