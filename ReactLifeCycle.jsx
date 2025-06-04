import React from "react";

class ReactLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is initialized");
  }

  componentDidMount() {
    console.log("Mount: Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Update: Count is updated to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log("Unmount: Component is unmounted");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>ReactLifeCycle Example</h2>
        <p>Count: {this.state.count}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.props.onToggle}>Toggle</button>
        </div>
      </div>
    );
  }
}

export default ReactLifeCycle;
