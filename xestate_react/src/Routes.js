import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
  	                <Route exact path='/'><Home /></Route>
    	            <Route exact path='/rooms'><rooms /></Route>
                    <Route exact path='/create'><create /></Route>
                    <Route exact path='/report'><report /></Route>
                </Switch>
            </Router>
        );
    }
}

export default Routes;