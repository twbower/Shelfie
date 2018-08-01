import React, {Component} from 'react';
import axios from 'axios';


export default class Form extends Component{
    constructor(props){
        super(props)
    
    this.state = {
        Inventory: props.inventory,
        currentId: props.currentId,
        buttonText: 'Add to Inventory'
      }    

      this.handleCancel = this.handleCancel.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.addProduct = this.addProduct.bind(this)
    }
componentDidUpdate(prevProps){
    if (this.props.selected !== prevProps.selected){
        this.setState({
            currentId: this.props.selected,
            name: this.props.name,
            price: this.props.price,
            image: this.props.image,
            isEdit: true,
            buttonText: 'Save Changes'
        })
    }
}

addProduct(props) {
    let newProduct = {
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
        buttonText: 'Add to Inventory'
    };
    axios.post('/api/product', newProduct)
        .then(response => {
            this.props.getUpdatedInventory(response.data)
        })
}
//should fire when clicks "save changes" button
editProduct(){
    axios.put(`/api/product/${this.state.currentId}`, {
        name: this.state.name,
        price: this.state.price,
        image: this.state.image
    })
    .then(this.props.getUpdatedInventory())
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
handleCancel(e){
    this.setState({
        image: "",
        price: 0,
        image: "",
        isEdit: false
    })
}
    
    render() {
        return (
            <div>
                
                <label>Image URL:</label>
                <input onChange={this.handleChange} name="image" type="text" value={this.state.image}/>
                <label>Product Name:</label>
                <input onChange={this.handleChange} name="name" type="text" value={this.state.product}/>
                <label>Price</label>
                <input onChange={this.handleChange} name="price" type="text" value={this.state.price}/>
                <div>
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.addProduct}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}