import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {

    render() {
        const product = this.props.inventory.map((e, i) => {
            return (
                <div>
                <Product key={e.id} image={e.image} product={e.product} price={e.price} />
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




