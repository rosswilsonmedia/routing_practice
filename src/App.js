import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';

import Welcome from './components/Welcome';
import NumberWord from './components/NumberWord';
import WordWithStyle from './components/WordWithStyle';

function App() {
  return (
    <Router>
      <Welcome path="/home"/>
      <NumberWord path="/:value"/>
      <WordWithStyle path="/:word/:color/:backgroundColor"/>
    </Router>
  );
}

export default App;
