import React, { Component } from 'react';
const axios = require('axios');

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  };

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then((response) =>{
        this.setState({data: response.data.products})

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed

      });
  }
  handleClick= (e)=> {
    console.log('clicked');
    console.log('this.data',this.state);

  }



  render() {

    return (

      <div className="container">

        <p> Hello from InputForm</p>
        <button onClick={this.handleClick}>Show all products</button>
        {console.log('data',this.state.data)}
        <ul>
        {this.state.data.map(item =>
          <li key={item._id}>{item.name} {item.price}€ <img src="/home/juergen/Projects/RESTful-API/uploads/{item.productImage}" alt="lala"/>/></li>

        )}
        </ul>
      </div>
    )

  }
}

export default InputForm;
