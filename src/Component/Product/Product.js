import React, {Component} from 'react';

export default class Product extends Component{
    render(){
        return (
            <div>
                {this.props.image}
                {this.props.product}
                {this.props.price}
            </div>
        );
    }
} 