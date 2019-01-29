import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";

class PrivateRoute extends Component {

    render() {

        return (
            <Route {...this.props} compoent={RenderComponent}/>
        );
    }


}

const RenderComponent = ({user, location, ...component}) => {

    return (
        user
            ? <Component {...component} />
            : <Redirect to={{pathname: '/', state: {from: location}}}/>
    )

};

const mapStateToProps = (state) => {
    const {user} = state.auth;

    return {user};
};


export default connect(
    mapStateToProps
)(PrivateRoute);