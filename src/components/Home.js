import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

class Home extends Component {

    componentWillMount() {
    }


    render() {
console.log('enttoo');
        return (
            <div>
                Hola
            </div>
        );


    }

}

const mapStateToProps = (state) => {
    const {user} = state.auth;

    return {user};
};


export default withRouter(connect(mapStateToProps, {})(Home));
