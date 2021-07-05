import { render } from "@testing-library/react";
import React, { Component } from "react";

class Stateful extends Component {
  constructor(props) {
    //inicializacion
    super(props);
    this.state = {
      hello: "Hola Mundo",
    };
  }

  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default Stateful;
