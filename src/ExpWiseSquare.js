import React, { Component } from 'react';
import './WiseSquare.css';

class ExpWiseSquare extends Component {
    static defaultProps = {
       message: [
            "Nothing in the world worth having comes easy",
            "If you haven't experienced, you haven't lived",
            "If you do not change, you become extinct"
        ]
    }

    dispenseWisdom = () => {
        let { message } = this.props;
        let rIndex = Math.floor(Math.random() * message.length);
        console.log(message[rIndex]);
    }


    render() {
        return (
            <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>🤓</div>
        )
    }
}

export default ExpWiseSquare;