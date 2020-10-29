import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Explore from './HomePage/components/Explore'
import Home from './HomePage/containers/Home'

const Routes = () => {
        return (
                <>
                        <Switch>
                                <Route
                                        exact
                                        path='/explore'
                                        render={routerProps => <Explore {...routerProps} pageTitle="Explore" />}
                                /> 
                                <Route 
                                        exact
                                        path="/"
                                        render={routerProps => <Home {...routerProps} pageTitle="Home" />}
                                />
                        </Switch>
                </>
        )
}

export default Routes
