import React, { Component } from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';
import axios from 'axios';

import './App.css';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      inventory: [{
        id: "",
        name: "",
        price: "",
        image: "",
        buttonText: "",
        isEdit: false,
        currentId: null
    }],
      
  };
    this.getUpdatedInventory = this.getUpdatedInventory.bind(this);
    this.currentlySelected = this.currentlySelected.bind(this)
   }
  componentDidMount(){
    //read
    axios.get('/api/inventory')
    .then ((response)=>{
      this.setState({
        inventory : response.data
      })
    })
  }
  //pass down to dashboard
  getUpdatedInventory(){
    axios.get(`/api/inventory`)
    .then(response => {
      this.setState({
        inventory: response.data
      })
  })
}
//method to set the selected product on state
currentlySelected(input){
  this.setState({
   currentId: input,
   name: this.props.name,
   price: this.props.price,
   image: this.props.image,
   isEdit: true
  })
}

  render() {
    return (
      <div className="App">
       <Dashboard inventory = {this.state.inventory} 
       getUpdatedInventory={this.getUpdatedInventory}
       selected={this.currentlySelected}/>
       <Form inventory = {this.state.inventory} 
       getUpdatedInventory={this.getUpdatedInventory} 
       selected={this.currentlySelected}/>
       <Header/>
      </div>
    );
  
}
}
