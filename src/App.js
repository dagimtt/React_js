import React from 'react';
import {Home} from './components/Home'
import{Employee} from './components/Employee';
import { Product } from './components/Product';
import { Navigation } from './components/Navigation';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <div className="page">
   <Routes>
      <Route path='/' Component={Home} exact />
      <Route path='/Employee' Component={Employee} />
      <Route path='/Product' Component={Product} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
