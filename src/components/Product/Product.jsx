import React, { Fragment } from "react";

import classes from "./Product.module.css";

const product = props => {
  return (
    <Fragment>
      <div className={classes.Product}>
        <img src={props.product.imageUrl} alt="product" />
        <p>{props.product.title}</p>
        <p>{props.product.price}</p>
      </div>
    </Fragment>
  );
};

export default product;
