import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import LandingPage from './containers/LandingPage';
import ShowProfile from './containers/ShowProfile';

const App = ({user}) => {

  return (
    <div>
      <Header loggedIn={user?.token}/>
      <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/profile" exact element={<ShowProfile />} />
          </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);
