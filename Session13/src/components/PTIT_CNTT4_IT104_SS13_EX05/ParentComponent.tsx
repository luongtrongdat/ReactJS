import React, { Component } from "react";

import ChildrentComponent from "./ChildrentComponent";

export default class ParentComponent extends Component {
  render() {
    const product = { id: 1, name: "Bưởi ba roi", price: 12000, quantity: 6 };
    return (
      <div>
        <ChildrentComponent {...product} />
      </div>
    );
  }
}