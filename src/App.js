import React, {Component, Suspense} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import PrivateRoute from "./components/commons/PrivateRoute";
import history from './components/commons/history';
import {store} from "./redux/store/store";
import Header from "./components/commons/Header";
import Loading from "./components/Loading";


const Login = React.lazy(() => import('./components/auth/Login'));
const Home = React.lazy(() => import('./components/Home'));
const Detail = React.lazy(() => import('./components/Detail'));

//const NotFound = React.lazy(() => import('./NotFound')

class App extends Component {


    render() {
        return (
            <Provider store={store}>

                    <Router history={history}>
                        <Suspense fallback={<Loading/>}>
                        <div className="App">
                            <Switch>
                                <Route path="/" render={() => <Login/>} exact={true}/>
                                <div>
                                    <Header/>
                                    <PrivateRoute path="/home" inner={Home}/>
                                    <PrivateRoute path="/detail" inner={Detail}/>
                                </div>
                            </Switch>
                        </div>
                        </Suspense>
                    </Router>
            </Provider>
        );
    }
}


export default App;
