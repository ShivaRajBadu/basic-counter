import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            increment
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-sm btn-secondary m-1  "
            disabled={this.props.counter.value === 0 && true}
          >
            decrement
          </button>{" "}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  // handleIncrement = (name) => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };
}

export default Counter;
