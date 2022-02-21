// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './components/home';
import { Search } from './components/searchpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      {/* <Search/> */}
    </div>
  );
}

export default App;
