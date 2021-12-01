import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onReset, onIncrement, onDecrement, counters, onDelete } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Rest
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
