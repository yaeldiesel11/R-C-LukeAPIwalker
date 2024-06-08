import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchBar from '../../view/SearchBar';
import Error from '../Error';
import People from '../Resources/People';
import Planets from '../Resources/Planets';

const App = () => {
  return (
    <div className="App">
      <h1> Star Wars API </h1>
      <SearchBar />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
