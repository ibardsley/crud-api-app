import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="main">
        <div className='navbar'>
          <NavBar />
        </div>
        <br></br>
        <h2 className="main-header">Password Keeper App</h2>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;