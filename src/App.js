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
        image: "",
        product: "",
        price: ""
    }]
  } }
  componentDidMount(){
    axios.get('/api/inventory')
    .then ((response)=>{
      this.setState({
        inventory : response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
       <Dashboard inventory = {this.state.inventory}/>
       <Form/>
       <Header/>
      </div>
    );
  
}
}
