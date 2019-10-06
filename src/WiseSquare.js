import React, { Component } from 'react';

class WiseSquare extends Component {
    dispenseWisdom() {
        let message = [
            /* wise message go here */
            "Nothing in the world worth having comes easy",
            "If you haven't experienced, you haven't lived",
            "If you do not change, you become extinct"
        ];

        let rIndex = Math.floor(Math.random() * message.length);
        console.log(message[rIndex]);
    }


    render() {
        return (
            <div className="WiseSquare">🤓</div>
        )
    }
}

export default WiseSquare;