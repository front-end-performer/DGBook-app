import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

import {auth} from '../fire-base';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import EditBook from './EditBook';
import CreateBook from './CreateBook';
import NoMatch from './NoMatch';

class App extends React.Component {

  state= { user: false}
  
  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(user => {
      this.setState({user})
    });
  }

  componentWillUnmount(){
    this.authListener();
  }

  render() {
    const {user} = this.state;
    return (
      <>
        <NotificationContainer/>
        <Header user={user}/>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/create-book' render={props => <CreateBook {...props} user={user}/>} />
            <Route path='/edit-book/:bookUid' render={props => <EditBook {...props} user={user}/>} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
