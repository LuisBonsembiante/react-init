import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Login from "./components/auth/Login";
import Home from "./components/Home";
import {Route, Router, Switch} from 'react-router-dom';
import PrivateRoute from "./components/commons/PrivateRoute";
import history from './components/commons/history';
import {store} from "./redux/store/store";
import Header from "./components/commons/Header";
import Detail from "./components/Detail";

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div className="App">
                        <Switch>
                            <Route path="/" render={Login} exact={true}/>
                            <div>
                                <Header/>
                                <PrivateRoute path="/home" inner={Home}/>
                                <PrivateRoute path="/detail" inner={Detail}/>
                            </div>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
