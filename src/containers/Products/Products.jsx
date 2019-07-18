import React, { Component, Fragment } from "react";

import Product from "../../components/Product/Product";
import classes from "./Products.module.css";

class Products extends Component {
  state = {
    allProducts: [
      {
        id: 1,
        imageUrl: "https://picsum.photos/id/437/300/500",
        title: "a shirt",
        price: 4.5,
        freeShipping: true
      },
      {
        id: 2,
        imageUrl: "https://picsum.photos/id/437/300/500",
        title: "a shirt",
        price: 4.5,
        freeShipping: false
      },
      {
        id: 3,
        imageUrl: "https://picsum.photos/id/437/300/500",
        title: "a shirt",
        price: 4.5,
        freeShipping: false
      },
      {
        id: 4,
        imageUrl: "https://picsum.photos/id/437/300/500",
        title: "a shirt",
        price: 4.5,
        freeShipping: false
      }
    ]
  };
  render() {
    return (
      <Fragment>
        <div className={classes.Products}>
          {this.state.allProducts.map(product => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default Products;
