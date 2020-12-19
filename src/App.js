import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { db } from './firebase'

function App() { 

  const [ cartItems, setCartItems ] = useState([]);

  useEffect(() => {
    db.collection('cart-items').onSnapshot((snapshot)=>{
      let tempCartItems = []
      snapshot.docs.map((doc)=>{
          tempCartItems.push({
              id: doc.id,
              cartItem: doc.data()
          })
      })
      setCartItems(tempCartItems)
    })
  }, [])


  return (
    <Router>
      <div className="App">
        <Header 
          cartItems={cartItems} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
