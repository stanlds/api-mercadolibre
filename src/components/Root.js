import React from 'react'
import Title from './Title'
import ProductContainer from './ProductContainer'
import Detail from './Detail'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}   from "react-router-dom"
const Root = () => (
  <>
    <Router>
    <h5><Title>STAN´S  API-STORE</Title></h5>
    
      <Switch>
        
        <Route path="/detailProduct/:id">  
          <Detail></Detail>         
        </Route> 
        <Route path="/">
          <ProductContainer />
        </Route>
     </Switch>
            
    </Router>
  </>
)

export default Root
