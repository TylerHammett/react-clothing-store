import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndUp from './pages/signInAndUp/SignInAndUp.component';
import {auth} from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInAndUp} />
      </Switch>
      </div>
    );
  }
}

export default App;
