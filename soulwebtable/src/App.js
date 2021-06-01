import { BrowserRouter, Route, NavLink } from "react-router-dom";
import DataGridTable from './components/DataGridTable';
import SimpleTable from './components/SimpleTable';

function App() {

  return (    
    <BrowserRouter>
      <nav className="navbar justify-content-end">
        <ul className="nav">
          <li className="nav-item"><NavLink className="nav-link" activeClassName="color-green" to="/simple-table">Simple Table</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" activeClassName="color-green" to="/react-data-grid-table">ReactDataGrid Table</NavLink></li>          
        </ul>
      </nav>
      <Route path="/simple-table" component={SimpleTable}/>
      <Route path="/react-data-grid-table" component={DataGridTable}/>      
    </BrowserRouter>
  );
}

export default App;
