import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props)
    
    this.state = {
        image: "",
        product: "",
        price: 0
      }    

      this.handleCancel = this.handleCancel.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
handleCancel(e){
    this.setState({
        image: "",
        product: "",
        price: 0
    })
}
    
    render() {
        return (
            <div>
                
                <label>Image URL:</label>
                <input onChange={this.handleChange} name="image" type="text" value={this.state.image}/>
                <label>Product Name:</label>
                <input onChange={this.handleChange} name="product" type="text" value={this.state.product}/>
                <label>Price</label>
                <input onChange={this.handleChange} name="price" type="text" value={this.state.price}/>
                <div>
                <button onClick={this.handleCancel}>Cancel</button>
                <button>Add to Inventory</button>
                </div>
            </div>
        );
    }
}