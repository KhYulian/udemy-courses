import {Component} from 'react';

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {hasError: false};
  }

  componentDidCatch(error) {
    // makes component error boundary.
    console.log(error);
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) return <h1>Something went wrong...</h1>
    return this.props.children;
  }
}

