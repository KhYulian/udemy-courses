import UserFinder from './components/UserFinder';
import {Provider} from 'react'
import context from './components/store/context';

function App() {
  return (
    <Provider context={context}>
      <UserFinder />
    </Provider>
  );
}

export default App;
