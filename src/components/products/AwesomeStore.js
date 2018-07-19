import React, { Component } from 'react'
import Product from './Product'
import Header from './Header'
import './App.css'

function awesomeButton() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200) {  
    
    this.setState({ products: JSON.parse(xhttp.response) })
    
  }
}
xhttp.open("GET", "http://localhost:4000/products", true );
xhttp.send();
}

function renderProducts(products) {
  let ProductsTest = []

  for (let key in products) {
    ProductsTest[key] = <Product
      image={`${products[key].thumbnail}?${key}`}
      description={products[key].title}
      price={products[key].price}
      discount={products[key].priceDiscount}
    />
  }
return ProductsTest
}




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    };
  }
  
  componentDidMount() {
    awesomeButton.call(this)
  }
  

  render() {
    return (
      <div className="background">
       <Header />
             {renderProducts(this.state.products)}
           </div>
        
        
    );
  }
}

export default App;



