import './App.css';
import {Link, Outlet} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <h1>LIBRARY APP</h1>
      <nav 
      style={{borderBottom:"solid 1px", paddingBottom:"1rem"}}>
        <Link to="/books">Books</Link>
        {" "}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
