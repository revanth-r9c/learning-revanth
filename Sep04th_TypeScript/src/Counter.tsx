import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        count: 0,
        change: null 
    };

    increment = () => {
        this.setState({ count: this.state.count + 1, change: 'increase' });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1, change: 'decrease' });
    };

    render() {
        const { count, change } = this.state;

        return (
            <div className="counter-container">
                <h2 className="counter-title">Counter</h2>
                <div className={`counter-value ${change}`}>
                    {count}
                </div>
                <div className="counter-controls">
                    <button className="counter-button increment" onClick={this.increment}>Increase</button>
                    <button className="counter-button decrement" onClick={this.decrement}>Decrease</button>
                </div>
            </div>
        );
    }
}

export default Counter;
