import { Container } from 'react-bootstrap';
import './App.css';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <Container>
          <MovieList/>
      </Container>
      
    </div>
  );
}

export default App;
