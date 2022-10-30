import logo from './logo.svg';
import './App.css';
import InitialForm from './components/InitialForm'
import Container from './components/Container';

function App() {
  let title = "Ward Survey";
  return (
    <div className="App">
      <Container titleFromApp={title}/>
    </div>
  );
}

export default App;
