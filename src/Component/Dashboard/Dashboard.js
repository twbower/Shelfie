import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory: [],
            name: "",
            price: "",
            image: "",
            isEdit: false
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    componentDidMount(){
        axios.get('/api/inventory')
        .then(response => {
            this.setState({
                inventory: response.data
            })
        })
    }

    deleteProduct(key){
        axios.delete('/api/product/${key}')
        .then(response => {
            this.props.getInventory()
        })
    }


    render() {
        const product = this.props.inventory.map((e, i) => {
            return (
                <div>
                <Product key={e.id} image={e.image} name={e.name} price={e.price} deleteProduct={this.deleteProduct}/>
                </div>
            )

        })

        return (
            <div>
                {product}
            </div>
        );
    }
}




