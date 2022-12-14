import { Switch } from '@material-ui/core';
import { BrowserRouter, SWitch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {Home} from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position ="top-center" />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
