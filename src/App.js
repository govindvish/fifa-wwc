import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Matches from './components/Matches';
import Groups from './components/Groups';
import Teams from './components/Teams';


class App extends Component {
    render(){
        let routes = (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/matches' component={Matches} />
                <Route exact path='/groups' component={Groups} />
                <Route exact path='/teams' component={Teams} />
                <Redirect to='/' />
            </Switch>
        );
        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

export default App;
