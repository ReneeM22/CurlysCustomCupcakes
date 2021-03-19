import React, { Component } from "react";
//import { but } from "home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Build your cupcake:</h3>
        <button
          className="btn btn-dark"
          style={{ color: "pink", margin: "4px" }}
        >
          Cake
        </button>
        <br />
        <button
          className="btn btn-dark"
          style={{ color: "pink", margin: "4px" }}
        >
          Frosting
        </button>
        <br />
        <button
          className="btn btn-dark"
          style={{ color: "pink", margin: "4px" }}
        >
          Toppings
        </button>
        <br />
        <img height="100" src="./images/cupcake.jpg" alt="Cupcake" />
        <br />
        <button
          className="btn btn-dark"
          style={{ color: "red", margin: "4px" }}
        >
          Check Out
        </button>
      </div>
    );
  }
}

export default Home;
