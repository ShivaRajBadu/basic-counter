import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 6 },
            { id: 3, value: 1 },
            { id: 4, value: 2 },
        ],
    };

    handleIncerement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value--;
        this.setState({ counters });
    };
    handleRest = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(
            (counter) => counter.id !== counterId
        );
        this.setState({ counters });
    };
    render() {
        return ( <
            >
            <
            NavBar totalCounters = { this.state.counters.filter((c) => c.value > 0).length }
            /> <
            main className = "container" >
            <
            Counters counters = { this.state.counters }
            onReset = { this.handleRest }
            onDelete = { this.handleDelete }
            onIncrement = { this.handleIncerement }
            onDecrement = { this.handleDecrement }
            /> <
            /main> <
            />
        );
    }
}

export default App;