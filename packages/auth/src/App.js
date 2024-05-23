import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// Instead of class prefix 'jss', this will replace it for randomly generated names for our marketing app
// This way we can avoid CSS collisions
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    return (    
    <div>
        <StylesProvider generateClassName={generateClassName}>
        {/* Creating a memory history */}
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <Signin onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <Signup onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
    )
};