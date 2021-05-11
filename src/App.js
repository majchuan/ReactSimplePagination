import logo from './logo.svg';
import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test a react simple pagination with react hooks 
        </p>
      </header>
      <body>
        <Main></Main>
      </body>
    </div>
  );
}

export default App;
