import React, { Component } from "react";

class CopyDemo extends Component {
  handleCopy() {
    alert("Can't Copy This Na Na Na Na");
  }

  render() {
    return (
      <div>
        <h3>Try Copying Some of this Text: </h3>
        <section
          style={{ width: "300px", display: "inline-block " }}
          onCopy={this.handleCopy}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </section>
      </div>
    );
  }
}

export default CopyDemo;
