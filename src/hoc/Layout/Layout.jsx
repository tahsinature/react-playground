import React, { Fragment } from "react";

import Products from "../../containers/Products/Products";
import Filter from "../../containers/Filter/Filter";
import classes from "./Layout.module.css";

const layout = props => (
  <Fragment>
    <main className={classes.Main}>
      <div className={classes.FilterAndProducts}>
        <Filter />
        <Products />
      </div>
    </main>
    <div>Cart</div>
  </Fragment>
);

export default layout;
