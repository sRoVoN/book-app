import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Books from './components/books';
import About from './components/about';
import Book from './components/book';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />  } >
      <Route path='/about' element={<About />} />
      <Route path='/books' element={<Books />}>
        <Route
        index
        element={<main>
          <p>Choose a book </p>
        </main>}/>
      <Route path=':bookId' element={<Book />} />
      </Route>
      </Route>        
    </Routes>      
    </BrowserRouter>    
  </React.StrictMode>
);

reportWebVitals();
