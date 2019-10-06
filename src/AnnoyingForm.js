import React, { Component } from 'react';

class AnnoyingForm extends Component {
    handleKeyUp() {
        alert("You Typed Something")
    }

    render() {
        return (
            <div>
                <h3>Try Typing in Here:</h3>
                <textarea onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

export default AnnoyingForm;