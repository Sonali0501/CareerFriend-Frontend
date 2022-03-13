import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import ShowProfile from './components/ShowProfile';

const App = () => {
  return (
    <div>
      <Header loggedIn={true}/>
      <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/profile" exact element={<ShowProfile />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
