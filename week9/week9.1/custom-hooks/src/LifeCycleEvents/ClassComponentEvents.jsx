import React from "react";

export class ClassCompEvent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("Component mount in class");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("Component unmount in class");
  }

  render() {
    // Render UI
    return <div>this is class component</div>;
  }
}
