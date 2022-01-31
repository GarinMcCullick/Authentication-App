import './App.css';
import Login from './Components/Login';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import SignUp from './Components/Sign-Up';
import Account from './Components/Account';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/account' element={ <Account />} />
          </Routes>
        </header>
      </div>
      </Router>
  );
}

export default App;
