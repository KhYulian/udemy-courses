import Counter from './components/Counter';

// Redux is a state managment system for cross-component or app-wide state.

// Local State - State that belongs to a single component. E.g. listening to user input in a input field; toggling a "show more" details field. Should be managed component-internal with useState() / useReducer()

// Cross-Component State - State that affect multiple components E.g open / closed state of a modal overlay. Requires "prop chains" / "prop drilling".

// App wide State - State that affects the netire app ( most / all components). E.g. user authentication.

// React Context - Potential Disadvantages 
// Complex Setup / Managment in big applications 
// Performance - context is great for low frequency state changes but not for high frequency state changes. 

// Core Redux Concepts
// Central Data(State) Store
// Components NEVER directly change data in the store.


function App() {
  return (
    <Counter />
  );
}

export default App;
