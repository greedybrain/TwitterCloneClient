import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ComposeMessage from './App/components/ComposeMessage'
import ComposeTweet from './App/components/ComposeTweet'
import Messages from './App/components/Messages'
import Notifications from './App/components/Notifications'
import Explore from './HomePage/components/Explore'
import Mentions from './HomePage/components/Mentions'
import Home from './HomePage/containers/Home'

const Routes = ({ setAccountInfoDisplayed }) => {
        return (
                <>
                        <Switch>
                                <Route 
                                        exact
                                        path='/notifications/mentions'
                                        render={routerProps => <Mentions {...routerProps} setAccountInfoDisplayed={setAccountInfoDisplayed} />}
                                />
                                <Route 
                                        exact
                                        path='/notifications'
                                        render={routerProps => <Notifications {...routerProps} setAccountInfoDisplayed={setAccountInfoDisplayed} />}
                                />
                                <Route 
                                        exact
                                        path='/messages'
                                        render={routerProps => <Messages {...routerProps} setAccountInfoDisplayed={setAccountInfoDisplayed} />}
                                />
                                <Route 
                                        exact 
                                        path='/messages/compose'
                                        render={routerProps => <ComposeMessage {...routerProps} />}
                                />
                                <Route
                                        exact
                                        path='/explore'
                                        render={routerProps => <Explore {...routerProps} setAccountInfoDisplayed={setAccountInfoDisplayed} />}
                                /> 
                                <Route 
                                        exact
                                        path='/compose/tweet'
                                        render={routerProps => <ComposeTweet {...routerProps} />}
                                />
                                <Route 
                                        exact
                                        path="/home"
                                        render={routerProps => <Home {...routerProps} pageTitle="Home" setAccountInfoDisplayed={setAccountInfoDisplayed} />}
                                />
                        </Switch>
                </>
        )
}

export default Routes
