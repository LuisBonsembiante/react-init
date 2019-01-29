import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../src/redux/reducers';
import './App.css';
import Login from "./components/auth/Login";
import Home from "./components/Home";
import {Route, Router, Switch} from 'react-router-dom';
import PrivateRoute from "./components/commons/PrivateRoute";
import history from './components/commons/history';

class App extends Component {


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div className="App">
                        <Switch>
                            <Route path="/" render={Login} exact={true}/>
                            <PrivateRoute path="/home" inner={Home}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
