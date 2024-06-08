import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchBar from '../../view/SearchBar';
import Error from '../Error';
import People from '../Resources/People';
import Films from '../Resources/Films';
import Planets from '../Resources/Planets';
import Starships from '../Resources/Starships';
import Species from '../Resources/Species';
import Vehicles from '../Resources/Vehicles';

const App = () => {
  return (
    <div className="App">
      <h1> Star Wars API </h1>
      <SearchBar />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="/vehicles/:id" element={<Vehicles />} />
        <Route path="/species/:id" element={<Species />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
